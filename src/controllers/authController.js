exports.triggerOTP = (req, res) => {
  const { mobile } = req.body;

  if (!mobile) {
    return res.status(400).json({ message: "Mobile number required" });
  }

  res.json({ message: "OTP sent successfully" });
};
