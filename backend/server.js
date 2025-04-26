// backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/userfeedback', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// Routes
const feedbackRoutes = require('./routes/feedbackRoutes');
app.use('/feedback', feedbackRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
