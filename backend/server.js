const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require('helmet'); 
const hpp = require('hpp'); 
const rateLimit = require('express-rate-limit'); 
const { mongoSanitize } = require('./middleware/sanitizeMiddleware'); 
const connectDB = require('./config/db.js');

dotenv.config();

connectDB();

const app = express();

app.use(helmet()); 
app.use(mongoSanitize); 
app.use(hpp());

const corsOptions = {
    origin: process.env.NODE_ENV === 'production' 
        ? ['https://gulabyar.com', 'https://www.gulabyar.com']
        : '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));

app.use(express.json()); 

const globalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: {
        success: false,
        message: "Too many requests from this IP, please try again after 15 minutes."
    }
    // 
});
app.use('/api', globalLimiter);

const strictLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, 
    max: 10,
    message: {
        success: false,
        message: "Request limit exceeded. Please try again after an hour."
    }
});
app.use('/api/auth/login', strictLimiter);
app.use('/api/inquiries', strictLimiter); 

app.get('/api/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server is healthy and running smoothly!",
        timestamp: new Date()
    });
});

app.use('/api/inquiries', require('./routes/inquiryRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/profile', require('./routes/profileRoutes'));
app.use('/api/skills', require('./routes/skillRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`[Server]: Running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});