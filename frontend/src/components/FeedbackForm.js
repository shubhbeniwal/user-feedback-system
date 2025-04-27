import React, { useState } from 'react';
import axios from 'axios';

function FeedbackForm() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [feedbackText, setFeedbackText] = useState('');
    const [category, setCategory] = useState('General');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/feedback', { userName, email, feedbackText, category });
            alert('Feedback submitted!');
            setUserName('');
            setEmail('');
            setFeedbackText('');
            setCategory('General');
        } catch (error) {
            alert('Error submitting feedback');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Submit Feedback</h2>
            <input type="text" placeholder="Name" value={userName} onChange={(e) => setUserName(e.target.value)} required />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <textarea placeholder="Your Feedback" value={feedbackText} onChange={(e) => setFeedbackText(e.target.value)} required></textarea>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="General">General</option>
                <option value="Bug Report">Bug Report</option>
                <option value="Feature Request">Feature Request</option>
                <option value="Suggestion">Suggestion</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    );
}

export default FeedbackForm;
