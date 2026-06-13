const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require('helmet'); // Security headers
const mongoSanitize = require('express-mongo-sanitize'); // NoSQL Injection prevention
const hpp = require('hpp'); // HTTP Parameter Pollution prevention
const rateLimit = require('express-rate-limit'); // Brute-force & Spam protection
const connectDB = require('./config/db.js');

// Environment variables configuration
dotenv.config();

// Database Connection call
connectDB();

const app = express();

// 1. Enterprise Security Middlewares
app.use(helmet()); // Secure HTTP headers
app.use(mongoSanitize()); // Prevent NoSQL Query Injection
app.use(hpp()); // Prevent HTTP Parameter Pollution

// CORS Configuration (Enterprise level)
const corsOptions = {
    origin: process.env.NODE_ENV === 'production' 
        ? ['https://gulabyar.com', 'https://www.gulabyar.com'] // Production domains
        : '*', // Allow all origins in development mode
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));

// Standard Middlewares
app.use(express.json()); // JSON parsing middleware

// 2. Rate Limiting Implementation
// Global Limiter (General routes: 15 minutes window, max 100 requests)
const globalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100,
    message: {
        success: false,
        message: "Too many requests from this IP, please try again after 15 minutes."
    }
});
app.use('/api', globalLimiter);

// Stricter Limiter for Sensitive Routes (Login & Inquiry forms: 1 hour window, max 10 requests)
const strictLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 10,
    message: {
        success: false,
        message: "Request limit exceeded. Please try again after an hour."
    }
});
app.use('/api/auth/login', strictLimiter);
app.use('/api/inquiries', strictLimiter); // Block mail spam bots on contact form

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
app.use('/api/profile', require('./routes/profileRoutes'));
app.use('/api/skills', require('./routes/skillRoutes'));

// Server Port Configuration
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`[Server]: Running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});