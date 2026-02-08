function projectLoanAccounts(req, res, next) {
  const accounts = res.locals.accounts;

  const projected = accounts.map(acc => ({
    loan_account_id: acc.loan_account_id,
    loan_type: acc.loan_type,
    tenure: acc.tenure
  }));

  res.json(projected);
}

module.exports = projectLoanAccounts;
