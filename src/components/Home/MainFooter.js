import React from "react";
import "./MainFooter.css";

const MainFooter = () => {
  return (
    <div role="contentinfo" className="member-footer" id="member-footer">
      <div className="social-links">
        <a
          className="social-link"
          href="https://www.facebook.com/NetflixIN/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="facebook"
        >
          <i className="fab fa-facebook fa-lg"></i>
        </a>
        <a
          className="social-link"
          href="https://www.instagram.com/Netflix_IN/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="instagram"
        >
          <i className="fab fa-instagram fa-lg"></i>
        </a>
        <a
          className="social-link"
          href="https://twitter.com/netflixindia"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="twitter"
        >
          <i className="fab fa-twitter fa-lg"></i>
        </a>
        <a
          className="social-link"
          href="https://www.youtube.com/channel/UCZSNzBgFub_WWil6TOTYwAg"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="youtube"
        >
          <i className="fab fa-youtube fa-lg"></i>
        </a>
      </div>
      <ul className="member-footer-links">
        <li className="member-footer-link-wrapper">
          <a className="member-footer-link" href="/browse/audio-description">
            <span className="member-footer-link-content">
              Audio Description
            </span>
          </a>
        </li>
        <li className="member-footer-link-wrapper">
          <a className="member-footer-link" href="https://help.netflix.com/">
            <span className="member-footer-link-content">Help Centre</span>
          </a>
        </li>
        <li className="member-footer-link-wrapper">
          <a className="member-footer-link" href="/redeem">
            <span className="member-footer-link-content">Gift Cards</span>
          </a>
        </li>
        <li className="member-footer-link-wrapper">
          <a className="member-footer-link" href="https://media.netflix.com/">
            <span className="member-footer-link-content">Media Centre</span>
          </a>
        </li>
        {/* Add more list items as needed */}
      </ul>
      <div className="member-footer-service">
        <button className="service-code">Service Code</button>
      </div>
      <div className="member-footer-copyright">
        <span>© 1997-2023 NF, Inc.‎</span>
      </div>
    </div>
  );
};

export default MainFooter;
