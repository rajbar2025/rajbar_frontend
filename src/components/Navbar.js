import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/navbar.css";
import rbLogo from "../assets/rblogo.png";

function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`custom-navbar ${scrolling ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src={rbLogo} height={78} alt="Logo" />
          </Link>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/events" onClick={toggleMenu}>Events</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
          {/* <li><Link to="/register" className="register-btn" onClick={toggleMenu}>Register</Link></li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;