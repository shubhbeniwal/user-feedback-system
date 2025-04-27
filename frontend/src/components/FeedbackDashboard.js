import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FeedbackDashboard() {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        fetchFeedback();
    }, []);

    const fetchFeedback = async () => {
        const response = await axios.get('http://localhost:5000/feedback');
        setFeedbacks(response.data);
    };

    return (
        <div>
            <h2>Feedback Dashboard</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Category</th>
                        <th>Feedback</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {feedbacks.map((fb) => (
                        <tr key={fb._id}>
                            <td>{fb.userName}</td>
                            <td>{fb.email}</td>
                            <td>{fb.category}</td>
                            <td>{fb.feedbackText}</td>
                            <td>{new Date(fb.timestamp).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default FeedbackDashboard;
