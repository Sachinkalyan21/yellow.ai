const { loanAccounts, loanDetails } = require("../data/mockData");

function getLoanAccounts(req, res, next) {
  res.locals.accounts = loanAccounts;
  next();
}

function getLoanDetails(req, res) {
  const { loanId } = req.params;

  if (!loanDetails[loanId])
    return res.status(404).json({ error: "Loan not found" });

  res.json(loanDetails[loanId]);
}

module.exports = { getLoanAccounts, getLoanDetails };
