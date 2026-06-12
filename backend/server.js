const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Environment variables configure karein
dotenv.config();

const app = express();

// Standard Middlewares
app.use(cors());
app.use(express.json()); // Frontend se aane wale JSON data ko parse karne ke liye

// Health Check API (Server testing ke liye)
app.get('/api/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server is healthy and running smoothly!",
        timestamp: new Date()
    });
});

// Server Port set karein
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`[Server]: Running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});