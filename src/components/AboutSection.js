import React from "react";
import "../styles/about.css";
import AboutUsimg from "../assets/about_us.png"

const AboutUs = () => {
  return (
    <section className="about-us">
      <h2 className="title">About Us</h2>
      <p className="subtitle">Crafting community, one cocktail at a time.</p>

      <div className="content">
        <div className="image-grid">
        <img src={AboutUsimg} alt="Liquor" className="responsive-img" />
        <img src={AboutUsimg} alt="Liquor" className="responsive-img" />
        <img src={AboutUsimg} alt="Liquor" className="responsive-img" />

          {/* <img src="/bar.jpg" alt="Bar Scene" className="img" />
          <img src="/whiskey.jpg" alt="Whiskey Bottle" className="img img-rotate" />
          <img src="/cocktail.jpg" alt="Cocktail Making" className="img" />
          <img src="/shelves.jpg" alt="Bar Shelves" className="img img-round" />
          <img src="/pub.jpg" alt="Pub Interior" className="img img-custom" /> */}
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
    </section>
  );
};

export default AboutUs;
