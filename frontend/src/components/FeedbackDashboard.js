import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FeedbackDashboard() {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    try {
      const res = await axios.get('http://localhost:5000/feedback');
      setFeedbackList(res.data);
    } catch (error) {
      console.error('Error fetching feedback:', error);
    }
  };

  return (
    <div>
      <h2>Feedback Dashboard</h2>
      {feedbackList.length === 0 ? (
        <p>No feedback available.</p>
      ) : (
        <ul>
          {feedbackList.map((feedback) => (
            <li key={feedback._id}>
              <strong>{feedback.userName}</strong> ({feedback.email})<br />
              {feedback.category} - {feedback.feedbackText}<br />
              <small>{new Date(feedback.timestamp).toLocaleString()}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FeedbackDashboard;
