import "../styles/events.css";

function EventsSection() {
  return (
    <section className="events-section">
      <h2>Upcoming Events</h2>
      <div className="events-gallery">
        <img src="../assets/event1.jpg" alt="Event 1" />
        <img src="../assets/event2.jpg" alt="Event 2" />
      </div>
    </section>
  );
}

export default EventsSection;
