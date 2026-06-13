const Profile = require('../models/Profile');

// @desc    Get global profile configurations (Public)
// @route   GET /api/profile
// @access  Public
exports.getProfile = async (req, res) => {
    try {
        // Database se profile fetch karein (sirf ek hi copy exist karegi)
        const profile = await Profile.findOne();

        if (!profile) {
            return res.status(200).json({
                success: true,
                message: "No profile created yet. Please use PUT request to initialize.",
                data: null
            });
        }

        res.status(200).json({
            success: true,
            data: profile
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

// @desc    Create or Update global profile (Admin Only)
// @route   PUT /api/profile
// @access  Private (Admin Only)
exports.updateProfile = async (req, res) => {
    try {
        const { name, title, bio, experienceYears, email, phone, linkedinUrl, githubUrl, resumeUrl, avatarUrl } = req.body;

        let profile = await Profile.findOne();

        if (profile) {
            // Agar profile pehle se hai to update karein
            profile = await Profile.findByIdAndUpdate(
                profile._id,
                { name, title, bio, experienceYears, email, phone, linkedinUrl, githubUrl, resumeUrl, avatarUrl },
                { new: true, runValidators: true }
            );
        } else {
            // Agar profile nahi hai to pehli dafa create karein
            profile = await Profile.create({
                name,
                title,
                bio,
                experienceYears,
                email,
                phone,
                linkedinUrl,
                githubUrl,
                resumeUrl,
                avatarUrl
            });
        }

        res.status(200).json({
            success: true,
            message: "Profile configuration updated successfully!",
            data: profile
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};