const express = require('express');
const router = express.Router();

const { createProject, getProjects, deleteProject } = require('../controllers/projectController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', getProjects);

router.post('/', protect, createProject);
router.delete('/:id', protect, deleteProject);

module.exports = router;