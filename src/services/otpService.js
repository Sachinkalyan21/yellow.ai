const { generateMockOTP } = require("../utils/helpers");

let otpStore = {};

function createOTP(phone) {
  const otp = generateMockOTP();
  otpStore[phone] = { otp, attempts: 0 };
  return otp;
}

function verifyOTP(phone, enteredOtp) {
  if (!otpStore[phone]) return { error: "OTP not requested" };

  if (otpStore[phone].otp === enteredOtp) {
    delete otpStore[phone];
    return { success: true };
  }

  otpStore[phone].attempts += 1;

  if (otpStore[phone].attempts >= 3) {
    delete otpStore[phone];
    return { error: "Maximum attempts exceeded" };
  }

  return { error: "Invalid OTP" };
}

module.exports = { createOTP, verifyOTP };
