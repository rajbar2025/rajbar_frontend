import { useState } from "react";
import "../styles/hero.css";
import mainImg from "../assets/hero-bg.png";
import { registerUser } from "../api/api"; 

function HeroSection() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    city: "",
    about: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phoneNumber") {
      const sanitizedValue = value.replace(/[^0-9]/g, ""); 
      if (sanitizedValue.length <= 10 && !/^[0123456]/.test(sanitizedValue)) {
        setFormData({ ...formData, [name]: sanitizedValue });
      }
    } else if (name === "name") {
      const sanitizedValue = value.replace(/[^a-zA-Z ]/g, "");
      setFormData({ ...formData, [name]: sanitizedValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    const phonePattern = /^[789]\d{9}$/; 
    if (!phonePattern.test(formData.phoneNumber)) {
      alert("Invalid phone number. It should start with 7, 8, or 9 and must be 10 digits long.");
      return false;
    }
    if (formData.name.trim().length < 3) {
      alert("Name must be at least 3 characters long.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setMessage("");

    const userData = {
      name: formData.name,
      phone_number: formData.phoneNumber,
      city: formData.city,
      about_you: formData.about,
    };

    try {
      const response = await registerUser(userData);
      setMessage("Registration successful!");
      console.log("Success:", response);
      setFormData({ name: "", phoneNumber: "", city: "", about: "" }); // Reset form
      setTimeout(() => setShowPopup(false), 2000); // Close popup after 2 sec
    } catch (error) {
      setMessage("Registration failed. Try again.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="hero-section">
      <h1>Raise the Bar with <br/> Rajasthan Bartender's Association</h1>
      <p>
        Unifying the Craft of Mixology Across Rajasthan with Mixologist <span>Mr. Virendra Singh</span>
      </p>
      <button className="hero-btn" onClick={() => setShowPopup(true)}>
        Register Now
      </button>
      <br/>
      <p className="mb-10 mt-10">Join us today and be part of an exclusive bartending community!</p>
      <img src={mainImg} alt="Main Image" className="responsive-img" />

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <span className="close-btn" onClick={() => setShowPopup(false)}>✖</span>
            <h2>Registration Form</h2>
            {message && <p className="message">{message}</p>}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                required
              />
              <textarea
                name="about"
                placeholder="Tell us more about you (Optional)"
                value={formData.about}
                onChange={handleChange}
              ></textarea>
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Registering..." : "Register"}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default HeroSection;
