import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-dark text-white py-2">
    <div className="container text-center">
      <p className="mb-1" style={{ color: '#f7f30c', fontSize: '14px', maxWidth: '700px', margin: '0 auto' }}>
        <strong className="text-decoration-underline">Notice:</strong> Twittervideodownload.com is not affiliated with Twitter.com. We neither host copyrighted material nor allow users to engage in unauthorized sharing of information. We do not
        <br />
        store any videos or photos on our servers. All videos or GIFs are downloaded directly from Twitter servers to your device.
      </p>
      <hr className="border-secondary mt-0 mb-1" style={{ width: '50%', margin: '0 auto' }} />
      <p className="mb-0" style={{ fontSize: '14px' }}>
        &copy; 2002 - 2023 | All Rights Reserved - <Link to="/" className="link-light text-decoration-none">Twitter Video Downloader</Link>
      </p>
      <p style={{ fontSize: '14px' }}>
        <Link to="/privacy" className="link-light text-decoration-none">Privacy Policy</Link> | <Link to="/term" className="link-light text-decoration-none">Terms & Conditions</Link>
      </p>
    </div>
  </footer>
);

export default Footer;
