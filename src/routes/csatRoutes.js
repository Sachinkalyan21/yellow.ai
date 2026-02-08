const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { rating, feedback } = req.body;

  if (!rating)
    return res.status(400).json({ error: "Rating required" });

  console.log("CSAT:", rating, feedback);

  res.json({ message: "Thank you for your feedback!" });
});

module.exports = router;
