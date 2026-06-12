const Inquiry = require('../models/Inquiry');

// @desc    Submit a new client inquiry
// @route   POST /api/inquiries
// @access  Public
exports.createInquiry = async (req, res) => {
    try {
        const { name, email, company, serviceNeeded, budget, message } = req.body;

        // Database me document create karein
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

// @desc    Get all client inquiries (For Admin Dashboard)
// @route   GET /api/inquiries
// @access  Private (Admin Only)
exports.getInquiries = async (req, res) => {
    try {
        // Sabhi messages ko fetch karein, latest ko sab se pehle dikhane ke liye sort karein
        const inquiries = await Inquiry.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: inquiries.length,
            data: inquiries
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

// @desc    Update inquiry status (For Admin Dashboard)
// @route   PATCH /api/inquiries/:id/status
// @access  Private (Admin Only)
exports.updateInquiryStatus = async (req, res) => {
    try {
        const { status } = req.body;

        // Status validation check karein
        if (!['pending', 'contacted', 'resolved'].includes(status)) {
            return res.status(400).json({
                success: false,
                message: "Please provide a valid status: pending, contacted, or resolved"
            });
        }

        const inquiry = await Inquiry.findById(req.params.id);

        if (!inquiry) {
            return res.status(404).json({
                success: false,
                message: "Inquiry not found"
            });
        }

        // Status update karein
        inquiry.status = status;
        await inquiry.save();

        res.status(200).json({
            success: true,
            message: `Inquiry status updated successfully to '${status}'!`,
            data: inquiry
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

// @desc    Delete an inquiry (For Admin Dashboard)
// @route   DELETE /api/inquiries/:id
// @access  Private (Admin Only)
exports.deleteInquiry = async (req, res) => {
    try {
        const inquiry = await Inquiry.findById(req.params.id);

        if (!inquiry) {
            return res.status(404).json({
                success: false,
                message: "Inquiry not found"
            });
        }

        // Database se remove karein
        await inquiry.deleteOne();

        res.status(200).json({
            success: true,
            message: "Inquiry deleted successfully!"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};