import React, { useState, useEffect } from 'react';

const VideoDownload = ({ videoDetails }) => {
  const [blobUrls, setBlobUrls] = useState([]);

  useEffect(() => {
    const fetchBlobs = async () => {
      const urls = await Promise.all(
        videoDetails.media.map(async (media) => {
          const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/${media.url}`);
          const blob = await response.blob();
          return URL.createObjectURL(blob);
        })
      );
      setBlobUrls(urls);
    };

    fetchBlobs();

    return () => {
      blobUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [videoDetails.media]);

  return (
    <div className="container mt-4">
      <div className="card-body border rounded p-3">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h5 className="card-title text-start text-dark">
              <img src={videoDetails.profile_img} alt="" width="40" height="40" className="rounded-circle me-2" />
              <strong>{videoDetails.author}</strong>
            </h5>
            <p className="card-text text-start h5 pb-3 pt-3">
              <span style={{ fontWeight: 400 }}>{videoDetails.title}</span>
            </p>
            <div className="videoHolder d-flex justify-content-center">
              <video id="player" className="video" style={{ height: '240px', width: '50%' }} controls loop>
                <source src={`${process.env.REACT_APP_BACKEND_URL}/${videoDetails.media[0].url}`}
 type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="col-md-8">
            <div className="dropdown text-center mt-2 mb-2">
              <div className="alert alert-success text-center" role="alert">
                Save the video by simply clicking on "Download" button
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Quality</th>
                    <th scope="col">Format</th>
                    <th scope="col">Downloads</th>
                  </tr>
                </thead>
                <tbody>
                  {videoDetails.media.map((media, index) => (
                    <tr key={index}>
                      <td>{media.quality}</td>
                      <td>{media.extension}</td>
                      <td>
                        <a
                          href={blobUrls[index]}
                          download={`video_${index}.${media.extension}`}
                          className="btn btn-sm btn-primary"
                          style={{ textDecoration: 'none', color: 'white' }}
                        >
                          Download
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDownload;
