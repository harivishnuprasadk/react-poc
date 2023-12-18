import React from 'react';
import './Footer.css';

function Footer() {
    return(
        <footer className="footer">
          <p className="questions">Questions? Call 000-800-919-1694</p>
          <ul class="footer-links structural">
            <li
              class="footer-link-item"
              placeholder="footer_responsive_link_faq_item"
            >
              <a
                class="footer-link"
                data-uia="footer-link"
                href="https://help.netflix.com/support/412"
                placeholder="footer_responsive_link_faq"
              >
                <span id="" data-uia="data-uia-footer-label">
                  FAQ
                </span>
              </a>
            </li>
            <li
              class="footer-link-item"
              placeholder="footer_responsive_link_help_item"
            >
              <a
                class="footer-link"
                data-uia="footer-link"
                href="https://help.netflix.com"
                placeholder="footer_responsive_link_help"
              >
                <span id="" data-uia="data-uia-footer-label">
                  Help Centre
                </span>
              </a>
            </li>
            <li
              class="footer-link-item"
              placeholder="footer_responsive_link_terms_item"
            >
              <a
                class="footer-link"
                data-uia="footer-link"
                href="https://help.netflix.com/legal/termsofuse"
                placeholder="footer_responsive_link_terms"
              >
                <span id="" data-uia="data-uia-footer-label">
                  Terms of Use
                </span>
              </a>
            </li>
            <li
              class="footer-link-item"
              placeholder="footer_responsive_link_privacy_separate_link_item"
            >
              <a
                class="footer-link"
                data-uia="footer-link"
                href="https://help.netflix.com/legal/privacy"
                placeholder="footer_responsive_link_privacy_separate_link"
              >
                <span id="" data-uia="data-uia-footer-label">
                  Privacy
                </span>
              </a>
            </li>
            <li
              class="footer-link-item"
              placeholder="footer_responsive_link_cookies_separate_link_item"
            >
              <a
                class="footer-link"
                data-uia="footer-link"
                href="#"
                placeholder="footer_responsive_link_cookies_separate_link"
              >
                <span id="" data-uia="data-uia-footer-label">
                  Cookie Preferences
                </span>
              </a>
            </li>
            <li
              class="footer-link-item"
              placeholder="footer_responsive_link_corporate_information_item"
            >
              <a
                class="footer-link"
                data-uia="footer-link"
                href="https://help.netflix.com/legal/corpinfo"
                placeholder="footer_responsive_link_corporate_information"
              >
                <span id="" data-uia="data-uia-footer-label">
                  Corporate Information
                </span>
              </a>
            </li>
          </ul>
        </footer>
    );
}

export default Footer;