const express = require('express');
const router = express.Router();
const { createProject, getProjects, updateProject, deleteProject } = require('../controllers/projectController');
const { protect } = require('../middleware/authMiddleware');

// Public Route
router.get('/', getProjects);

// Private Routes
router.post('/', protect, createProject);
router.put('/:id', protect, updateProject); // PUT route register karein
router.delete('/:id', protect, deleteProject);

module.exports = router;