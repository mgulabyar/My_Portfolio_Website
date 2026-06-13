const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');

// Environment variables configuration
dotenv.config();

// Database Connection call
connectDB();

const app = express();

// Standard Middlewares
app.use(cors());
app.use(express.json()); // JSON parsing middleware

// Health Check API (Public)
app.get('/api/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server is healthy and running smoothly!",
        timestamp: new Date()
    });
});

// Mount API Routes
app.use('/api/inquiries', require('./routes/inquiryRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/profile', require('./routes/profileRoutes')); // Profile Route register karein

// Server Port Configuration
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`[Server]: Running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});