const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a project title'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Please provide a project description'],
        trim: true
    },
    category: {
        type: String,
        required: [true, 'Please select a project category'],
        enum: {
            values: ['MERN Stack', 'Google Workspace', 'MS Office', 'AI Integration', 'VBA Macros', 'Other'],
            message: 'Please select a valid category'
        }
    },
    gifUrl: {
        type: String,
        required: [true, 'Please provide a project GIF or Image URL'],
        trim: true
    },
    technologies: {
        type: [String],
        required: [true, 'Please provide technologies used in this project']
    },
    liveUrl: {
        type: String,
        trim: true,
        default: ''
    },
    githubUrl: {
        type: String,
        trim: true,
        default: ''
    },
    featured: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Project', projectSchema);