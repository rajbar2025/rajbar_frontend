import { useState } from "react";
import "../styles/contact.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="contact-container">
      {/* Left Panel */}
      <div className="contact-info">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-desc">
          Founded with a vision to uplift and empower the bartending community, we regularly organize events.
        </p>
        <p className="contact-desc">Feel free to get in touch with us through our channels:</p>
        <div className="contact-details">
          <h3>Email Us</h3>
          <p>gsfg@gmail.com</p>
        </div>
        <div className="contact-details">
          <h3>Call Us</h3>
          <p>1234567890</p>
        </div>
      </div>

      {/* Form Panel */}
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="form-field">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter First Name"
              />
            </div>
            <div className="form-field">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter Last Name"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-field">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
              />
            </div>
            <div className="form-field">
              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Phone Number"
              />
            </div>
          </div>
          <div className="form-field">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message.."
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
