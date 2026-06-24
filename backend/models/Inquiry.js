const mongoose = require('mongoose');
// inquitrey.js databse schema
const inquirySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide your name'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Please provide your email address'],
        trim: true,
        lowercase: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please provide a valid email address'
        ]
    },
    company: {
        type: String,
        trim: true,
        default: ''
    },
    serviceNeeded: {
        type: String,
        required: [true, 'Please select the service you need'],
        enum: {
            values: ['Web Development', 'Google Workspace Add-ons', 'MS Office Add-ins', 'AI Integration', 'VBA Macros', 'Other'],
            message: 'Please select a valid service'
        }
    },
    budget: {
        type: String,
        trim: true,
        default: 'Not specified'
    },
    message: {
        type: String,
        required: [true, 'Please provide project details or a message'],
        trim: true
    },
    status: {
        type: String,
        enum: ['pending', 'contacted', 'resolved'],
        default: 'pending'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Inquiry', inquirySchema);