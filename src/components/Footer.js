import React from "react";
import "../styles/footer.css"; 
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa"; 

const Footer = () => {
  const handletechredirect = () => {
    window.location.href = "/yarsi-tech";
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left Section: Brand Info */}
        <div className="footer-section">
          <h3 className="footer-title">Yarsi Corp Tech Services</h3>
          <strong>Empowering businesses with cutting-edge technology, automation, and seamless digital solutions.</strong>
          <p>
          Managed & Maintained by <strong>Yarsi Corp Tech Services</strong>
        </p>
          <button onClick={handletechredirect} className="tech-btn">Explore Yarsi Tech</button>
        </div>

        {/* Middle Section: Quick Links */}
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/services">Our Services</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Right Section: Contact Info */}
        <div className="footer-section">
          <h3 className="footer-title">Get in Touch</h3>
          <p><FaEnvelope /> rajasthanbartenders@gmail.com</p>
          <div className="footer-socials">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Rajasthan Bartenders | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
