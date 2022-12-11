const express = require("express");

const raceController = require("../controllers/raceController");
const router = express.Router();

router.get("/", raceController.getRaces, (reg, res) => {
  console.log(res.locals.races);
  return res.status(200).json(res.locals.races);
});

router.post("/", raceController.addRace, (req, res) => {
  return res.status(200).json(res.locals);
});

module.exports = router;
