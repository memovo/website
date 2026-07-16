import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>SHOOLIN VORA</h3>
          <p>Composer · Pianist</p>
        </div>

        <div className="footer-divider"></div>

        <p className="footer-copyright">
          {currentYear} Shoolin Vora. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
