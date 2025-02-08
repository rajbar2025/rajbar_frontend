import { useState } from "react";
// import { submitFeedback } from "../api/api"; 
import "../styles/contact.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error when user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage(null);
    setErrors({}); // Reset errors before submission

    try {
      setResponseMessage("Your message has been sent successfully!");
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        message: "",
      });
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data); // Set API validation errors
      } else {
        setResponseMessage("Failed to send message. Please try again.");
      }
      console.error("Feedback submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      {/* Left Panel */}
      <div className="contact-info">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-desc">
          Rajasthan Bartenders was founded by <strong>Mixologist Virender Singh</strong> with a vision to uplift and empower the bartending community. Our mission is to elevate bartending standards through education, training, and exclusive networking opportunities.
        </p>
        <p className="contact-desc">
          We regularly organize workshops, competitions, and industry events to connect and inspire bartenders across the region. Whether you are an aspiring bartender or an experienced professional, we welcome you to be part of our vibrant community.
        </p>
        <p className="contact-desc">Feel free to get in touch with us through our channels:</p>
        <div className="contact-details">
          <h3>Email Us</h3>
          <p>rajasthanbartenders@gmail.com</p>
        </div>
        <div className="contact-details">
          <h3>Call Us</h3>
          <p>9828859669</p>
        </div>
      </div>

      {/* Form Panel */}
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="form-field">
              {/* <label>First Name</label> */}
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                placeholder="First Name"
                required
              />
              {errors.first_name && <p className="error">{errors.first_name[0]}</p>}
            </div>
            <div className="form-field">
              {/* <label>Last Name</label> */}
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                placeholder="Last Name"
                required
              />
              {errors.last_name && <p className="error">{errors.last_name[0]}</p>}
            </div>
          </div>
          <div className="form-group">
            <div className="form-field">
              {/* <label>Email</label> */}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
              {errors.email && <p className="error">{errors.email[0]}</p>}
            </div>
            <div className="form-field">
              {/* <label>Phone Number</label> */}
              <input
                type="text"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                placeholder="Phone Number"
                required
              />
              {errors.phone_number && <p className="error">{errors.phone_number[0]}</p>}
            </div>
          </div>
          <div className="form-field">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message.."
              required
            ></textarea>
            {errors.message && <p className="error">{errors.message[0]}</p>}
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
          {responseMessage && <p className="response-message">{responseMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;