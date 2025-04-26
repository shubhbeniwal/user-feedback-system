import React, { useState } from 'react';
import axios from 'axios';

function FeedbackForm() {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    feedbackText: '',
    category: 'General'
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/feedback', formData);
      alert('Feedback submitted successfully!');
      setFormData({
        userName: '',
        email: '',
        feedbackText: '',
        category: 'General'
      });
    } catch (error) {
      alert('Error submitting feedback!');
    }
  };

  return (
    <div>
      <h2>Submit Feedback</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="userName" 
          placeholder="Your Name" 
          value={formData.userName} 
          onChange={handleChange}
          required 
        />
        <br />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange}
          required 
        />
        <br />
        <textarea 
          name="feedbackText" 
          placeholder="Your Feedback" 
          value={formData.feedbackText} 
          onChange={handleChange}
          required 
        />
        <br />
        <select 
          name="category" 
          value={formData.category} 
          onChange={handleChange}
        >
          <option value="General">General</option>
          <option value="Bug Report">Bug Report</option>
          <option value="Feature Request">Feature Request</option>
        </select>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FeedbackForm;
