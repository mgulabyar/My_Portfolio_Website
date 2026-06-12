const Inquiry = require('../models/Inquiry');

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

exports.getInquiries = async (req, res) => {
    try {
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

 
exports.updateInquiryStatus = async (req, res) => {
    try {
        const { status } = req.body;

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
  
exports.deleteInquiry = async (req, res) => {
    try {
        const inquiry = await Inquiry.findById(req.params.id);

        if (!inquiry) {
            return res.status(404).json({
                success: false,
                message: "Inquiry not found"
            });
        }

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