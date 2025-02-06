import React from "react";
import "../styles/footer.css"; 
// import brandLogo from "../assets/brand-logo.png"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Handled and Maintained by <strong>Yarsi Coep Tech Services</strong></p>
        <p>
          Visit us at:{" "}
          <a href="https://www.yarsicorp.com" target="_blank" rel="noopener noreferrer">
            yarsicorp.com
          </a>
        </p>
        <div className="brand">
          {/* <img src={brandLogo} alt="Rajasthan Bartenders" className="logo" /> */}
          <span>Rajasthan Bartenders</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
