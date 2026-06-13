const express = require('express');
const router = express.Router();
const { createProject, getProjects, updateProject, deleteProject } = require('../controllers/projectController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', getProjects);

router.post('/', protect, createProject);
router.put('/:id', protect, updateProject); 
router.delete('/:id', protect, deleteProject);

module.exports = router;