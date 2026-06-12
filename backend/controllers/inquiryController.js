const Inquiry = require('../models/Inquiry');

// @desc    Submit a new client inquiry
// @route   POST /api/inquiries
// @access  Public
exports.createInquiry = async (req, res) => {
    try {
        const { name, email, company, serviceNeeded, budget, message } = req.body;

        const inquiry = await Inquiry.create({
            name,
            email,
            company,
            serviceNeeded,
            budget,
            message
        });

        res.status(201).json({
            success: true,
            message: "Inquiry submitted successfully! We will get back to you soon.",
            data: inquiry
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};