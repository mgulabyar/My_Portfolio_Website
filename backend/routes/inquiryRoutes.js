const express = require("express");
const router = express.Router();
const {
  createInquiry,
  getInquiries,
  updateInquiryStatus,
  deleteInquiry,
} = require("../controllers/inquiryController");
const { protect } = require("../middleware/authMiddleware");

// Public Route: Client submission
router.post("/", createInquiry);

// Private Routes: Admin management only
router.get("/", protect, getInquiries);
router.patch("/:id/status", protect, updateInquiryStatus);
router.delete("/:id", protect, deleteInquiry);

module.exports = router;
