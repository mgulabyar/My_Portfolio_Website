const express = require('express');
const router = express.Router();

// Imports check karein
const { createProject, getProjects, deleteProject } = require('../controllers/projectController');
const { protect } = require('../middleware/authMiddleware');

// Public Route
router.get('/', getProjects);

// Private Routes (Protect middleware added)
router.post('/', protect, createProject);
router.delete('/:id', protect, deleteProject);

module.exports = router;