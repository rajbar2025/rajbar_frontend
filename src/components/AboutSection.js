import React from "react";
import "../styles/about.css";
import AboutUsimg from "../assets/about_us.png";
import Founder from "../assets/viru.jpg";
import AboutUsimg1 from "../assets/about1.jpg"
import AboutUsimg2 from "../assets/about2.jpg"

const AboutUs = () => {
  return (
    <section className="about-us">
      <h2 className="title">About Us</h2>
      <p className="subtitle">Crafting community, one cocktail at a time.</p>

      <div className="content">
        <div className="image-grid">
          
          <img style={{maxHeight:"292px"}} src={AboutUsimg1} alt="Liquor" className="responsive-img" />
          <img src={AboutUsimg} alt="Liquor" className="responsive-img" />
          <img src={AboutUsimg2} alt="Liquor" className="responsive-img" />
        </div>

        <div className="text">
          <p>
            The Rajasthan Bartender’s Association is a vibrant community dedicated to elevating the art of bartending.
            Our mission is to bring together professionals from across the state to exchange ideas, enhance skills,
            and celebrate the art of mixology. We aim to provide a platform where bartenders can learn, grow, and thrive in their careers.
          </p>
          <p>
            <i>
              Founded with a vision to uplift and empower the bartending community, we regularly organize events, masterclasses,
              and networking opportunities that foster creativity and excellence. Whether you’re a seasoned bartender or just
              starting your journey, our association is here to support you at every step.
            </i>
          </p>
        </div>
      </div>

      {/* Founder Section */}
      <div className="founder-section">
        <h3 className="founder-title">Meet Our Founder</h3>
        <div className="founder-content">
          <img src={Founder} alt="Founder Virendra Singh" className="founder-img" />
          <div className="founder-text">
            <h4 className="founder-name">Mr. Virendra Singh</h4>
            <p className="founder-quote">
              "At Rajasthan Bartenders, our vision is to redefine the bartending industry by bringing
              innovation, professionalism, and creativity to every event. We are committed to building a strong
              community where bartenders can thrive, learn, and showcase their talent. Every cocktail crafted
              is a story, and we are here to ensure those stories leave a lasting impression."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
