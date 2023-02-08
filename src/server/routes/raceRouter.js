const express = require("express");

const raceController = require("../controllers/raceController");
const authController = require("../middleware/authController");
const router = express.Router();

router.post(
  "/login",
  authController.authUser,
  raceController.getRaces,
  (reg, res) => {
    if (res.locals.auth) {
      return res.status(200).json(res.locals.races);
    } else {
      return res.status(400);
    }
  }
);

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
