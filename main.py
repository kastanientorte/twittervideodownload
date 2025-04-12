import asyncio
import binascii
import mimetypes
import random
import string
import httpx
import uvicorn
from fastapi import FastAPI, Request, HTTPException, BackgroundTasks
from fastapi.responses import JSONResponse, RedirectResponse, StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
from helpers import is_valid_twitter_url, extract_tweet_id, clean_title, get_quality, get_tweet_data
import base64
import os


app = FastAPI(docs_url=None, redoc_url=None)
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


async def cleanup(path):
    await asyncio.sleep(3600)
    os.unlink(path)


@app.get('/')
async def index():
    return RedirectResponse(url="https://twittervideodownload.vercel.app/")


@app.post("/")
async def get_tweet_media(request: Request):
    data = await request.json()
    url = data.get("videoUrl")
    if not is_valid_twitter_url(url=url):
        return JSONResponse(content=dict(err_code="INVALID_URL", error="Invalid URL"), status_code=400)
    try:
        tweet_id = extract_tweet_id(url)
    except ValueError:
        return JSONResponse(content=dict(err_code="INVALID_URL", error="Invalid URL"), status_code=400)
    final_data = {}
    medias = []
    final_data['media'] = medias
    # try:
    data = get_tweet_data(tweet_id)
    user = data.get('user', {})
    final_data['title'] = clean_title(data.get('text', ''))
    final_data['profile_img'] = user.get('profile_image_url_https', 'default.png')
    final_data['verified'] = user.get('verified', False)
    final_data['author'] = user.get('name', 'Twitter User')
    final_data['screen_name'] = user.get('screen_name', 'no_name')
    final_data['tweetId'] = tweet_id
    video = data.get('video')
    if video:
        for variant in video.get('variants', []):
            media_url = variant.get('src').split("?")[0]
            if media_url.__contains__(".m3u8"):
                continue
            m_data = {
                "url": base64.urlsafe_b64encode(media_url.encode("utf-8")).decode(),
                "quality": get_quality(media_url),
                "extension": mimetypes.guess_extension(variant.get('type'))
            }
            medias.append(m_data)
    elif data.get('quoted_tweet'):
        quoted_tweet = data.get('quoted_tweet')
        video = quoted_tweet.get('video')
        if video:
            for variant in video.get('variants', []):
                media_url = variant.get('src').split("?")[0]
                if media_url.__contains__(".m3u8"):
                    continue
                m_data = {
                    "url": base64.urlsafe_b64encode(media_url.encode("utf-8")).decode(),
                    "quality": get_quality(media_url),
                    "extension": mimetypes.guess_extension(variant.get('type'))
                }
                medias.append(m_data)

    return JSONResponse(content=final_data, status_code=200 if final_data else 400)


@app.get("/{tweet_url}")
async def download_tweet_media(background_tasks: BackgroundTasks, tweet_url: str):
    async def iterfile():
        async with httpx.AsyncClient(timeout=None) as client:
            async with client.stream("GET", decoded_tweet_url) as r:
                async for chunk in r.aiter_bytes():
                    yield chunk
    try:
        decoded_tweet_url = base64.urlsafe_b64decode(tweet_url).decode()
    except binascii.Error:
        raise HTTPException(status_code=404, detail="not a valid url")
   
    letters = string.ascii_letters + string.digits
    headers = {"Content-Disposition": f"attachment; filename={''.join(random.choice(letters) for _ in range(7))}.mp4",
               "content-description": "File Transfer"}
    return StreamingResponse(iterfile(),
                             headers=headers,
                             media_type="video/mp4")


if __name__ == '__main__':
    uvicorn.run(app)
