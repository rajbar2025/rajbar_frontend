import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/events.css";

const events = [
  {
    name: "Music Concert",
    category: "Entertainment",
    price: "₹999",
    place: "Mumbai",
    dateTime: "March 10, 2025 - 7:00 PM",
    thumbnail: "../assets/event1.jpg",
    whatsappLink: "https://wa.me/918888888888?text=I'm%20interested%20in%20Music%20Concert",
  },
  {
    name: "Tech Expo 2025",
    category: "Technology",
    price: "Free",
    place: "Bangalore",
    dateTime: "April 5, 2025 - 10:00 AM",
    thumbnail: "../assets/event2.jpg",
    whatsappLink: "https://wa.me/918888888888?text=I'm%20interested%20in%20Tech%20Expo%202025",
  },
  {
    name: "Food Festival",
    category: "Food & Drinks",
    price: "₹299",
    place: "Delhi",
    dateTime: "April 20, 2025 - 12:00 PM",
    thumbnail: "../assets/event3.jpg",
    whatsappLink: "https://wa.me/918888888888?text=I'm%20interested%20in%20Food%20Festival",
  },
  {
    name: "Art Workshop",
    category: "Education",
    price: "₹500",
    place: "Kolkata",
    dateTime: "May 12, 2025 - 2:00 PM",
    thumbnail: "../assets/event4.jpg",
    whatsappLink: "https://wa.me/918888888888?text=I'm%20interested%20in%20Art%20Workshop",
  },
  {
    name: "Startup Meetup",
    category: "Business",
    price: "₹1500",
    place: "Pune",
    dateTime: "June 1, 2025 - 6:00 PM",
    thumbnail: "../assets/event5.jpg",
    whatsappLink: "https://wa.me/918888888888?text=I'm%20interested%20in%20Startup%20Meetup",
  },
];

function EventsSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 tiles on larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="events-section">
      <h2 className="section-title">Upcoming Events</h2>
      <Slider {...settings} className="events-carousel">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <img src={event.thumbnail} alt={event.name} className="event-thumbnail" />
            <div className="event-info">
              <h3 className="event-name">{event.name}</h3>
              <p className="event-category"><strong>Category:</strong> {event.category}</p>
              <p className="event-price"><strong>Price:</strong> {event.price}</p>
              <p className="event-place"><strong>Location:</strong> {event.place}</p>
              <p className="event-date-time"><strong>Date & Time:</strong> {event.dateTime}</p>
              <a href={event.whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                More Info on WhatsApp
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default EventsSection;
