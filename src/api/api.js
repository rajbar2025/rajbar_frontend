import axios from "axios";

const API_ENDPOINT = "http://127.0.0.1:8000/api"; 

export const registerUser = (userData, token = null) => {
  let url = `${API_ENDPOINT}/register/`;
  let config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }

  return new Promise((resolve, reject) => {
    axios
      .post(url, userData, config)
      .then((res) => resolve(res.data))
      .catch((err) => reject(err.response ? err.response.data : err));
  });
};



export const createRazorpayOrder = async (userData) => {
  const url = `${API_ENDPOINT}/payments/create-payment/`;

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.post(url, userData, config);
    return response.data;
  } catch (error) {
    console.error("Error creating Razorpay order", error);
    throw error;
  }
};


export const submitFeedback = async (feedbackData, token = null) => {
  const url = `${API_ENDPOINT}/feedback/`;

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }

  try {
    const response = await axios.post(url, feedbackData, config);
    return response.data;
  } catch (error) {
    console.error("Error submitting feedback", error);
    throw error.response ? error.response.data : error;
  }
};



export const getEvents = async () => {
  const url = `${API_ENDPOINT}/events/`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching events", error);
    throw error.response ? error.response.data : error;
  }
};

export const getTestimonials = async () => {
  const url = `${API_ENDPOINT}/testimonials/`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching testimonials", error);
    throw error.response ? error.response.data : error;
  }
};