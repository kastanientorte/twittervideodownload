import React from 'react';

const AboutUs = () => (
  <section className="pb-8 pt-8">
    <div className="container pb-8 pt-8">
      <div className="align-items-center">
        <div className="col-lg-10 offset-lg-1">
          <div className="col-lg-12 order-lg-1 py-3">
            <h2 className="fw-normal h1 mb-2 text-dark">About Us</h2>
            <p className="fw-light mb-4">
              We are a group of IT geeks with many professional teams and our aim is to provide satisfying services to our end users, so users can have fast and secure service without any interruption and this is one of them.
            </p>
            <p className="fw-light mb-4">
              This Twitter video downloader is a free online tool that can be used to download the twitter videos and GIFs with high-quality video resolutions in easier manner.
            </p>
            <p className="fw-light mb-4">
              As you may know the twitter is a social media platform which is used by a number of people but it doesn’t facilitates the users to download the videos or GIFs. Whereas our twitter downloader application works as a saver from which you can download the twitter videos and GIFs by simply copy the video link or GIF link from the twitter and paste in the given input box, click the download button, then select the video resolutions you want from dropdown to download and finally click the Download Video button. Save the twitter videos and GIFs in your mobile, PC, laptop or other devices as it is compatible with any latest browsers. It is very secure and works with high speed to download the twitter videos and GIFs. Download the videos as much you want there is no limit for downloading the twitter videos and GIFs.
            </p>
            <h3 className="h4">Link to us</h3>
            <p>If you like our Twitter Video Download. Here is how you can link our site.</p>
            <form name="LinkText" className="form-group">
              <textarea className="form-control" rows="3" name="TextBox" id="TextBox" cols="30" dir="ltr" spellCheck="false">
                <a href="/about" title="TwitterVideoDownload">TwitterVideoDownload</a>
              </textarea>
            </form>
            <p>
              <a className="highlighttext" id="copyText" onClick={() => {
                const textarea = document.getElementById("TextBox");
                textarea.select();
                document.execCommand("copy");
              }} href="javascript:;">
                Click to Select Text Link
              </a>
            </p>
            <p className="fw-light mb-4">
              Note - TwitterVideoDownload.com does not store any videos, photos on our servers. All videos or GIF are downloaded directly from Twitter servers and saved on your device.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
