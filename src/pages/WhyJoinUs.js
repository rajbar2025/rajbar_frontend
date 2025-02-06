import React, { useState } from 'react';
import './WhyJoinUs.css'; 
import whyus1 from "../assets/whyus1.png";
import whyus2 from "../assets/whyus2.png";
import whyus3 from "../assets/whyus3.png";

const WhyJoinUs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleJoinNowClick = async () => {
    const phone_number = "9456809435"; // Replace with dynamic phone number from form/input
    const amount = 500; // Replace with dynamic amount from the user input

    try {
      setIsLoading(true);
      // Step 1: Request to create a payment order from the backend
      const response = await fetch('http://127.0.0.1:8000/api/payments/create-payment/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone_number,
          amount,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create payment order');
      }

      const data = await response.json();

      // Step 2: Open Razorpay payment gateway
      const options = {
        key: data.razorpay_key, // Razorpay Key from the response
        amount: data.amount, // Amount from the response
        currency: data.currency,
        name: "Rajasthan Bartender's Association",
        description: "Membership Fee",
        order_id: data.order_id, // Order ID from the response
        handler: async (response) => {
          // Step 3: Handle successful payment
          const transaction_id = response.razorpay_payment_id;

          // Step 4: Update payment status in the backend
          const paymentResponse = await fetch('http://127.0.0.1:8000/api/payments/update-payment/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              phone_number,
              transaction_id,
            }),
          });

          if (!paymentResponse.ok) {
            throw new Error('Failed to update payment status');
          }

          const paymentData = await paymentResponse.json();
          alert(paymentData.message); // Show success message
          window.location.href = paymentData.redirect_to; // Redirect to WhatsApp link
        },
        prefill: {
          name: "User Name",
          email: "user@example.com",
          contact: phone_number,
        },
        theme: {
          color: "#F50057",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      setError(error.message);
      alert("Error: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="why-join-us">
      <h2 className="heading">Why Join Us?</h2>
      <p className="subheading">Unlock exclusive member perks.</p>
      <p className="description">
        Joining the Rajasthan Bartender's Association means being part of a thriving
        community of mixology enthusiasts and professionals. Here's what you gain as a member:
      </p>
      
      <div className="benefits-container">
        <div className="benefit-item">
          <img src={whyus1} alt="Skill Development Workshops" />
          <h3>Skill Development Workshops</h3>
          <p>Learn from industry experts through hands-on training sessions and masterclasses.</p>
        </div>
        
        <div className="benefit-item">
          <img src={whyus2} alt="Networking Opportunities" />
          <h3>Networking Opportunities</h3>
          <p>Connect with top bartenders, mixologists, and industry leaders at exclusive events.</p>
        </div>
        
        <div className="benefit-item">
          <img src={whyus3} alt="Exclusive Events" />
          <h3>Access to Exclusive Events</h3>
          <p>Be the first to know and gain priority access to our signature bartending events.</p>
        </div>
      </div>

      <button 
        className="join-now-btn" 
        onClick={handleJoinNowClick}
        disabled={isLoading}
      >
        {isLoading ? "Processing..." : "Join Now"}
      </button>

      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default WhyJoinUs;
