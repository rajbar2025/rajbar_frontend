import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import './../styles/testimonials.css'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Dummy data instead of API call
    const dummyData = [
      {
        content: "Being a part of the Rajasthan Bartender's Association has been transformative for my career. The skill development workshops and networking opportunities have helped me refine my craft and connect with top professionals in the industry.",
        name: "Rajiv Mehta",
        designation: "Senior Bartender, Jaipur",
        profileUrl: "https://via.placeholder.com/50",
      },
      {
        content: "I joined the association to improve my mixology skills, and it exceeded all my expectations. The masterclasses and events are well-organized and incredibly insightful. I feel proud to be part of such a vibrant community.",
        name: "Simran Kaur",
        designation: "Aspiring Bartender, Jodhpur",
        profileUrl: "https://via.placeholder.com/50",
      },
      {
        content: "The Rajasthan Bartender's Association is more than just an organization—it's a family. From competitions to exclusive events, every experience has been enriching and fun. Highly recommended for anyone passionate about bartending.",
        name: "Akash Sharma",
        designation: "Mixologist, Udaipur",
        profileUrl: "https://via.placeholder.com/50",
      },
      {
        content: "Joining the association opened doors to many opportunities. I gained valuable skills and met professionals who have supported my career growth.",
        name: "Ravi Kumar",
        designation: "Bartender, Bikaner",
        profileUrl: "https://via.placeholder.com/50",
      },
      {
        content: "A wonderful community to learn and grow. I have improved my skills tremendously and made some lifelong friends.",
        name: "Sneha Sharma",
        designation: "Mixologist, Jaipur",
        profileUrl: "https://via.placeholder.com/50",
      },
    ];

    // Set dummy data to state
    setTestimonials(dummyData);
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
