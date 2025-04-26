// backend/routes/feedbackRoutes.js

const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

// POST feedback
router.post('/', async (req, res) => {
    try {
        const { userName, email, feedbackText, category } = req.body;
        const newFeedback = new Feedback({ userName, email, feedbackText, category });
        await newFeedback.save();
        res.status(201).json({ message: 'Feedback submitted successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
});

// GET feedback
router.get('/', async (req, res) => {
    try {
        const feedbacks = await Feedback.find().sort({ timestamp: -1 });
        res.json(feedbacks);
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
});

module.exports = router;
