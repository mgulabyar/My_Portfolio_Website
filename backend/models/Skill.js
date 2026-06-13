const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide skill name'],
        trim: true
    },
    percentage: {
        type: Number,
        required: [true, 'Please provide skill percentage (0-100)'],
        min: [0, 'Percentage cannot be less than 0'],
        max: [100, 'Percentage cannot be more than 100']
    },
    category: {
        type: String,
        required: [true, 'Please select skill category'],
        enum: {
            values: ['Frontend', 'Backend', 'Database', 'Automation/Add-ins', 'Cloud/DevOps', 'Other'],
            message: 'Please select a valid category'
        }
    },
    icon: {
        type: String, // SVG path code ya class name store karne ke liye
        default: ''
    },
    featured: {
        type: Boolean,
        default: false // Homepage par dynamic icons ke sath show karne ke liye
    }
}, { timestamps: true });

module.exports = mongoose.model('Skill', skillSchema);