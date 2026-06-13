const Profile = require('../models/Profile');

exports.getProfile = async (req, res) => {
    try {
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

exports.updateProfile = async (req, res) => {
    try {
        const { name, title, bio, experienceYears, email, phone, linkedinUrl, githubUrl, resumeUrl, avatarUrl } = req.body;

        let profile = await Profile.findOne();

        if (profile) {
            profile = await Profile.findByIdAndUpdate(
                profile._id,
                { name, title, bio, experienceYears, email, phone, linkedinUrl, githubUrl, resumeUrl, avatarUrl },
                { new: true, runValidators: true }
            );
        } else {
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