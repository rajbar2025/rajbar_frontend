import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { getEvents } from "../api/api"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/events.css";

const backendURL = process.env.NODE_ENV === "development"
  ? "http://localhost:8000" 
  : "https://your-live-backend.com";

function EventsSection() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getEvents();
        setEvents(data);
      } catch (error) {
        console.error("Failed to fetch events", error);
      }
    };

    fetchEvents();
  }, []);

  const formatDateTime = (dateTime) => {
    return new Date(dateTime).toLocaleString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
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
        {events.length > 0 ? (
          events.map((event, index) => (
            <div key={index} className="event-card">
              <img src={`${backendURL}${event.thumbnail}`} alt={event.name} className="event-thumbnail" />
              <div className="event-info">
                <h3 className="event-name">{event.name}</h3>
                <p className="event-category"><strong>Category:</strong> {event.category}</p>
                <p className="event-price"><strong>Price:</strong> ₹{event.price}</p>
                <p className="event-place"><strong>Location:</strong> {event.place}</p>
                <p className="event-date-time"><strong>Date & Time:</strong> {formatDateTime(event.date_time)}</p>
                <a href={event.whatsapp_link} target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                  More Info on WhatsApp
                </a>
              </div>
            </div>
          ))
        ) : (
          <p>Loading events...</p>
        )}
      </Slider>
    </section>
  );
}

export default EventsSection;
