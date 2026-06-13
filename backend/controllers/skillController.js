const Skill = require('../models/Skill');

// @desc    Create a new skill
// @route   POST /api/skills
// @access  Private (Admin Only)
exports.createSkill = async (req, res) => {
    try {
        const { name, percentage, category, icon, featured } = req.body;

        const skill = await Skill.create({
            name,
            percentage,
            category,
            icon,
            featured
        });

        res.status(201).json({
            success: true,
            message: "Skill added successfully!",
            data: skill
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

// @desc    Get all skills (Public)
// @route   GET /api/skills
// @access  Public
exports.getSkills = async (req, res) => {
    try {
        // Categories aur sorting ke sath skills fetch karein
        const skills = await Skill.find().sort({ category: 1, percentage: -1 });

        res.status(200).json({
            success: true,
            count: skills.length,
            data: skills
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

// @desc    Update skill
// @route   PUT /api/skills/:id
// @access  Private (Admin Only)
exports.updateSkill = async (req, res) => {
    try {
        let skill = await Skill.findById(req.params.id);

        if (!skill) {
            return res.status(404).json({
                success: false,
                message: "Skill not found"
            });
        }

        skill = await Skill.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            success: true,
            message: "Skill updated successfully!",
            data: skill
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

// @desc    Delete skill
// @route   DELETE /api/skills/:id
// @access  Private (Admin Only)
exports.deleteSkill = async (req, res) => {
    try {
        const skill = await Skill.findById(req.params.id);

        if (!skill) {
            return res.status(404).json({
                success: false,
                message: "Skill not found"
            });
        }

        await skill.deleteOne();

        res.status(200).json({
            success: true,
            message: "Skill deleted successfully!"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};