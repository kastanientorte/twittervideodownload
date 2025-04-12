import React from 'react';

const MethodSection = () => (
  <section className="text-center text-lg-start">
    <div className="container">
      <div className="align-items-center row justify-content-center">
        <div className="col-lg-5 pb-3 pt-3">
          <img
            src="/assets/img/tweet-video-link.png"
            className="img-fluid"
            alt="Twitter Video downloader"
            title="Twitter Video downloader"
            width="540"
            height="360"
          />
        </div>
        <div className="col-lg-5 pb-3 pt-3">
          <div className="pb-3 pt-3">
            <h3 className="fw-bold h5">1st METHOD</h3>
            <p className="fw-light mb-0">
              Visit <a href="https://twitter.com">Twitter.com</a> and search for the video you wish to save. Right-click on the video, and select the video tweet URL from the context menu.
            </p>
          </div>
        </div>
      </div>
      <div className="align-items-center row justify-content-center">
        <div className="col-lg-5 order-lg-2 pb-3 pt-3">
          <img
            src="/assets/img/tweet-address.png"
            className="img-fluid"
            alt="..."
            width="540"
            height="360"
          />
        </div>
        <div className="col-lg-5 order-lg-1 pb-3 pt-3">
          <div className="pb-3 pt-3">
            <h3 className="fw-bold h5">2nd METHOD</h3>
            <p className="fw-light mb-0">
              Click the tweet that contains video, gif and photo then Copy the video address from the address bar, as is shown in the image.
            </p>
          </div>
        </div>
      </div>
      <div className="align-items-center row justify-content-center">
        <div className="col-lg-5 pb-3 pt-3">
          <img
            src="/assets/img/tweet-share.png"
            className="img-fluid"
            alt="..."
            width="540"
            height="360"
          />
        </div>
        <div className="col-lg-5 pb-3 pt-3">
          <div className="pb-3 pt-3">
            <h3 className="fw-bold h5">3rd METHOD</h3>
            <p className="fw-light mb-0">
              Go to tweet that you wish to download, select Copy link to tweet, then insert video link into the box to <a href="https://twittervideodownload.com/">Download Twitter Video</a>, GIF and photo.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default MethodSection;
