const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
        trim: true
    },
    title: {
        type: String,
        required: [true, 'Please provide a professional title'],
        trim: true
    },
    bio: {
        type: String,
        required: [true, 'Please provide a bio/description'],
        trim: true
    },
    experienceYears: {
        type: String,
        required: [true, 'Please provide years of experience'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Please provide a contact email'],
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        trim: true,
        default: ''
    },
    linkedinUrl: {
        type: String,
        trim: true,
        default: ''
    },
    githubUrl: {
        type: String,
        trim: true,
        default: ''
    },
    resumeUrl: {
        type: String,
        trim: true,
        default: ''
    },
    // asfand sab 
    avatarUrl: {
        type: String,
        trim: true,
        default: ''
    }
}, { timestamps: true });

module.exports = mongoose.model('Profile', profileSchema);