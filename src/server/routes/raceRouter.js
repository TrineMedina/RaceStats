const express = require("express");

const raceController = require("../controllers/raceController");
const router = express.Router();

router.get("/", raceController.getRaces, (reg, res) => {
  return res.status(200).json(res.locals.races);
});

router.post("/", raceController.addRace, (req, res) => {
  return res.status(200).json(res.locals.race);
});

router.patch("/", raceController.editRace, (req, res) => {
  return res.status(200).json(res.locals.race);
});

router.delete("/", raceController.deleteRace, (req, res) => {
  return res.status(200).json(res.locals);
});

module.exports = router;
