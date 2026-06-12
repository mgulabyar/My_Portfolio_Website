const express = require('express');
const router = express.Router();
const { createInquiry } = require('../controllers/inquiryController');

// Define POST route
router.post('/', createInquiry);

module.exports = router;