const express = require('express');
const router = express.Router();
const { createSkill, getSkills, updateSkill, deleteSkill } = require('../controllers/skillController');
const { protect } = require('../middleware/authMiddleware');

// Public Route
router.get('/', getSkills);

// Private Routes
router.post('/', protect, createSkill);
router.put('/:id', protect, updateSkill);
router.delete('/:id', protect, deleteSkill);

module.exports = router;