const express = require("express");

const raceController = require("../controllers/raceController");
const router = express.Router();

router.post("/", raceController.addRace, (req, res) => {
  return res.status(200).json(res.locals);
});

module.exports = router;
