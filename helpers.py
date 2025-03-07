import re
from urllib.parse import urlparse
import requests


def get_media_binary(media_url, transform_content_type: dict = None, headers=None,
                     auth1_session=None):
    if headers is None:
        headers = {}
    auth = None
    if auth1_session is not None:
        auth = auth1_session.auth
    img_response = requests.get(media_url, headers=headers, auth=auth)
    content_type = img_response.headers['content-type']
    if transform_content_type:
        content_type = transform_content_type.get(content_type, content_type)
    return img_response.content, content_type


def is_valid_twitter_url(url):
    pattern = r'^https?://(twitter|x)\.com/(?:#!/)?(\w+)/status(?:es)?/(\d+)'
    match = re.match(pattern, url)
    return match


def extract_tweet_id(video_url: str):
    hostname = urlparse(video_url).hostname or ''
    domain = hostname.replace('www.', '')
    path = urlparse(video_url).path
    if domain in ('twitter.com', 'mobile.twitter.com', "x.com"):
        match = re.search(r'/status(?:es)?/(\d+)', path)
        if match:
            return match.group(1)
    elif domain in ('video.twimg.com', 'pbs.twimg.com'):
        match = re.search(r'/(\d+)/', path)
        if match:
            return match.group(1)
    raise ValueError('Invalid video URL: {}'.format(video_url))


def clean_title(title):
    title = re.sub(r'https?://([-\w.]+[-\w])+(:\d+)?(/([\w/_.#-]*(\?\S+)?[^.\s])?)?.*$', '', title)
    return title.strip()


def get_quality(url: str):
    match1 = re.search(r'vid/(\d+)x(\d+)/', url)
    match2 = re.search(r'vid/avc1/(\d+)x(\d+)/', url)
    if match1 is not None:
        width, height = match1.groups()
        return f"{width}x{height}"
    elif match2 is not None:
        width, height = match2.groups()
        return f"{width}x{height}"
    else:
        return "video"


def get_tweet_data(tweet_id: str):

    url = "https://cdn.syndication.twimg.com/tweet-result"

    querystring = {"id": tweet_id, "lang": "en", "token": "425qunmeze9"}

    payload = ""
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/114.0",
        "Accept": "*/*",
        "Accept-Language": "en-US,en;q=0.5",
        "Accept-Encoding": "gzip, deflate, br",
        "Origin": "https://platform.twitter.com",
        "Connection": "keep-alive",
        "Referer": "https://platform.twitter.com/",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "cross-site",
        "Pragma": "no-cache",
        "Cache-Control": "no-cache",
        "TE": "trailers"
    }

    resp = requests.request("GET", url, data=payload, headers=headers, params=querystring)
    if resp.ok:
        data = resp.json()
        return data
    

