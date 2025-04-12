import React, { useState } from 'react';
import VideoDownload from './VideoDownload';

const DownloadForm = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [videoDetails, setVideoDetails] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ videoUrl }),
      });
      const data = await response.json();
      setVideoDetails(data);
    } catch (error) {
      console.error('Error fetching video details:', error);
    }
  };

  return (
    <div className="container-fluid">
      <div className="pt-5 row bg-primary">
        <div className="col-lg-8 col-xs-12 mx-auto">
          <form onSubmit={handleSubmit} className="mb-4">
            <div className="bg-white border input-group p-1 rounded">
              <input
                name="videoUrl"
                type="url"
                className="border-0 form-control pe-3 ps-3"
                placeholder="Twitter Video Link Ex: https://twitter.com/hran/status/150779850"
                required
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
              />
              <button className="btn btn-primary pb-2 pe-4 ps-4 pt-2 rounded" type="submit">
                Download
              </button>
            </div>
          </form>
        </div>
      </div>
      {videoDetails && (
        <div className="mt-4">
          <VideoDownload videoDetails={videoDetails} />
        </div>
      )}
    </div>
  );
};

export default DownloadForm;
