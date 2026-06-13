const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json()); 

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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`[Server]: Running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});