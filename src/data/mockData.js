const loanAccounts = [
  {
    loan_account_id: "LA1001",
    loan_type: "Home Loan",
    tenure: "20 years",
    internal_bank_code: "X8899",
    audit_date: "2023-01-01"
  },
  {
    loan_account_id: "LA2002",
    loan_type: "Car Loan",
    tenure: "5 years",
    internal_bank_code: "X1111",
    audit_date: "2023-02-01"
  }
];

const loanDetails = {
  LA1001: {
    tenure: "20 years",
    interest_rate: "8.5%",
    principal_pending: "₹12,50,000",
    interest_pending: "₹1,20,000",
    nominee: "Priya Sharma"
  },
  LA2002: {
    tenure: "5 years",
    interest_rate: "9%",
    principal_pending: "₹3,50,000",
    interest_pending: "₹40,000",
    nominee: "Rahul Verma"
  }
};

module.exports = { loanAccounts, loanDetails };
