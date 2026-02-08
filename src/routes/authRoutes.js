const express = require("express");
const router = express.Router();
const { triggerOTP } = require("../controllers/authController");

router.post("/triggerOTP", triggerOTP);

module.exports = router;
