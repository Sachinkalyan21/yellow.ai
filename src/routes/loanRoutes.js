const express = require("express");
const router = express.Router();

const { getLoanAccounts, getLoanDetails } = require("../controllers/loanController");
const projectLoanAccounts = require("../middleware/projectionMiddleware");

router.get("/accounts", getLoanAccounts, projectLoanAccounts);
router.get("/details/:loanId", getLoanDetails);

module.exports = router;
