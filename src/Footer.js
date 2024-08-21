import React from 'react';
import './footer.css'; // Import the CSS file

// Icons as separate JSX components
const GooglePlayButton = () => (
  <a href="https://play.google.com/store/apps" className="store-button google-play">
    <img className = "footer-img" src="/path-to-google-play-icon.png" alt="Get it on Google Play" />
  </a>
);

const AppStoreButton = () => (
  <a href="https://apps.apple.com/app" className="store-button app-store">
    <img className = "footer-img" src="/path-to-app-store-icon.png" alt="Download on the App Store" />
  </a>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-column">
        <h4 className='footer-h4'>Column 1</h4>
        <p>Content for column 1.</p>
      </div>
      <div className="footer-column">
        <h4 className='footer-h4'>Column 2</h4>
        <p>Content for column 2.</p>
      </div>
      <div className="footer-column">
        <h4 className='footer-h4'>Column 3</h4>
        <p>Content for column 3.</p>
      </div>
      <div className="footer-column">
        <h4 className='footer-h4'>Column 4</h4>
        <p>Content for column 4.</p>
      </div>
    </div>
    <div className="footer-download-buttons">
      <GooglePlayButton />
      <AppStoreButton />
    </div>
  </footer>
);

export default Footer;
