// MainFooter.js

import React from "react";
import "./MainFooter.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
          </svg>
        </a>
        <a
          className="social-link"
          href="https://www.instagram.com/Netflix_IN/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="instagram"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          </svg>
        </a>
        <a
          className="social-link"
          href="https://twitter.com/netflixindia"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="twitter"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 2.5a9.294 9.294 0 0 1-2.64.725 4.583 4.583 0 0 0 2.022-2.525 9.292 9.292 0 0 1-2.933 1.12 4.641 4.641 0 0 0-8.003 4.45c0 .365.04.72.115 1.065A13.176 13.176 0 0 1 2.544 1.86a4.63 4.63 0 0 0 1.43 6.18 4.584 4.584 0 0 1-2.092-.576v.057a4.642 4.642 0 0 0 3.706 4.547 4.607 4.607 0 0 1-2.086.08 4.64 4.64 0 0 0 4.326 3.212 9.292 9.292 0 0 1-5.767 1.987 9.332 9.332 0 0 1-1.113-.067 13.107 13.107 0 0 0 7.08 2.072c8.039 0 12.444-6.662 12.444-12.444 0-.19-.005-.38-.014-.57a8.733 8.733 0 0 0 2.15-2.226z" />
          </svg>
        </a>
        <a
          className="social-link"
          href="https://www.youtube.com/channel/UCZSNzBgFub_WWil6TOTYwAg"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="youtube"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21.35 3.665C20.675 3.253 19.937 3 19.18 3 17.55 3 12 3 12 3S6.45 3 4.82 3C4.062 3 3.324 3.253 2.65 3.665 2.087 3.994 2 4.4 2 6.12v11.76c0 1.719.087 2.125.65 2.455.674.412 1.412.665 2.17.665 1.629 0 6.18 0 6.18 0s4.55 0 6.18 0c.758 0 1.496-.253 2.17-.665.563-.33.65-.736.65-2.455V6.12c0-1.72-.087-2.125-.65-2.455zM10 15V9l5.2 3-5.2 3z" />
          </svg>
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
        <FontAwesomeIcon
              icon={faArrowAltCircleLeft}
              style={{ color: "white" }}
            />
      </div>
    </div>
  );
};

export default MainFooter;
