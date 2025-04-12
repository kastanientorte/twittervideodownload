import React from 'react';

const StepsSection = () => (
  <section className="pb-8 pt-8">
    <div className="container pb-8 pt-8">
      <div className="row justify-content-center">
        <div className="col-lg-10 text-center">
          <h2 className="fw-bold h1 mb-4 text-dark">How to Download Twitter Videos and GIFs?</h2>
          <div className="row">
            <div className="col-md-4 text-center">
              <img style={{ width: '80px', height: '80px' }} title="Copy to URL" alt="Copy to URL" src="/assets/img/copyurl_twittervideodownload.png" />
              <div className="description">
                <b>Copy to URL</b><br />
                Copy the video/gif url to download twitter video
              </div>
            </div>
            <div className="col-md-4 text-center">
              <img style={{ width: '80px', height: '80px' }} title="Paste URL" alt="Paste URL" src="assets/img/pasteyurl_twittervideodownload.png" />
              <div className="description">
                <b>Paste URL</b><br />
                Paste the url into the address bar and click download to start downloading twitter video/gif.
              </div>
            </div>
            <div className="col-md-4 text-center">
              <img style={{ width: '80px', height: '80px' }} title="Download Twitter Video" alt="Download Twitter Video" src="assets/img/downloadurl_twittervideodownload.png" />
              <div className="description">
                <b>Download Twitter Video</b><br />
                Click the download button to save twitter video or gif to your computer.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default StepsSection;
