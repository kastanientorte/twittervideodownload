# Twitter Video Downloader  

A simple yet powerful Twitter/X video download service that helps users easily download videos from Twitter/X posts. This project provides a REST API interface to fetch and download video content.  

## Features  

• Extract video information from Twitter/X links  
• Support for multiple video quality download options  
• Provide direct video download functionality  
• Retrieve basic tweet information (author, title, etc.)  

## Installation Guide  

### Prerequisites  

• Python 3.7+  
• pip (Python package manager)  

### Installation Steps  

1. Clone or download the project locally  

2. Install project dependencies  
```bash  
pip install -r requirements.txt  
```  

## Launching the Project  

### Method 1: Directly Using Python  

```bash  
python main.py  
```  

### Method 2: Using Uvicorn (More Flexible)  

```bash  
uvicorn main:app --reload  
```  

By default, the service will run on `http://127.0.0.1:8000`.  

## API Usage Instructions  

### 1. Fetch Video Information  

**Request:**  
```markdown  
POST /  
Content-Type: application/json  

{  
    "videoUrl": "https://twitter.com/username/status/1234567890123456789"  
}  
```  

**Response:**  
```markdown  
{  
    "title": "Video Title",  
    "profile_img": "Author Avatar URL",  
    "verified": true/false,  
    "author": "Author Name",  
    "screen_name": "Author Username",  
    "tweetId": "Tweet ID",  
    "media": [  
        {  
            "url": "Base64-encoded video URL",  
            "quality": "Video quality (e.g., 640x360)",  
            "extension": "File extension"  
        }  
    ]  
}  
```  

### 2. Download Video  

**Request:**  
```markdown  
GET /{Base64-encoded video URL}  
```  

### Example Code  

Below is a `JavaScript` example demonstrating how to fetch video information via the API and generate a download link:  

```javascript  
// Fetch video information  
async function getVideoInfo() {  
    const response = await fetch('http://localhost:8000/', {  
        method: 'POST',  
        headers: {  
            'Content-Type': 'application/json'  
        },  
        body: JSON.stringify({  
            videoUrl: 'https://twitter.com/username/status/1234567890123456789'  
        })  
    });  
      
    const data = await response.json();  
    console.log(data);  
      
    // Example download link  
    const downloadLink = `http://localhost:8000/${data.media[0].url}`;  
    console.log('Download Link:', downloadLink);  
}  
```