function validatePhone(phone) {
  return /^[0-9]{10}$/.test(phone);
}

function generateMockOTP() {
  const allowed = ["1234", "5678", "7889", "1209"];
  return allowed[Math.floor(Math.random() * allowed.length)];
}

module.exports = { validatePhone, generateMockOTP };
