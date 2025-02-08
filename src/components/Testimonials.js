import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { getTestimonials } from '../api/api'; 
import './../styles/testimonials.css'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const backendURL = process.env.NODE_ENV === "development"
  ? "http://localhost:8000" 
  : "https://your-live-backend.com";
  
const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await getTestimonials(); // Fetch data from API
        const formattedData = data.map(item => ({
          ...item,
          profileUrl: item.profile_image ? `${backendURL}${item.profile_image}` : "https://via.placeholder.com/50"
        }));
        setTestimonials(formattedData);
      } catch (error) {
        console.error("Failed to fetch testimonials", error);
        setError("Failed to load testimonials. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  if (loading) return <p>Loading testimonials...</p>;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <div className="testimonials-section">
      <h2 className="heading">What Our Members Say</h2>
      <p className="subheading">Voices from our community.</p>

      <Slider {...settings} className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-content">"{testimonial.content}"</p>
            <div className="testimonial-author">
              <img
                src={testimonial.profileUrl}
                alt={testimonial.name}
                className="author-image"
              />
              <div className="author-info">
                <strong>{testimonial.name}</strong>
                <p>{testimonial.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
