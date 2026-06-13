const Project = require('../models/Project');

// @desc    Create a new project
// @route   POST /api/projects
// @access  Private (Admin Only)
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

// @desc    Get all projects
// @route   GET /api/projects
// @access  Public
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

// @desc    Update an existing project
// @route   PUT /api/projects/:id
// @access  Private (Admin Only)
exports.updateProject = async (req, res) => {
    try {
        let project = await Project.findById(req.params.id);

        if (!project) {
            return res.status(404).json({
                success: false,
                message: "Project not found"
            });
        }

        // Project details update karein
        project = await Project.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            success: true,
            message: "Project updated successfully!",
            data: project
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

// @desc    Delete a project
// @route   DELETE /api/projects/:id
// @access  Private (Admin Only)
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