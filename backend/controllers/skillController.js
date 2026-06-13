const Skill = require('../models/Skill');

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

exports.getSkills = async (req, res) => {
    try {
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