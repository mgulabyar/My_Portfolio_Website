const Project = require('../models/Project');

exports.createProject = async (req, res) => {
    try {
        const { title, description, category, gifUrl, technologies, liveUrl, githubUrl, featured } = req.body;

        const project = await Project.create({
            title,
            description,
            category,
            gifUrl,
            technologies,
            liveUrl,
            githubUrl,
            featured
        });

        res.status(201).json({
            success: true,
            message: "Project created successfully!",
            data: project
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};


exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: projects.length,
            data: projects
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

exports.deleteProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);

        if (!project) {
            return res.status(404).json({
                success: false,
                message: "Project not found"
            });
        }

        await project.deleteOne();

        res.status(200).json({
            success: true,
            message: "Project deleted successfully!"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};