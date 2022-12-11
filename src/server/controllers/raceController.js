const db = require("../models/dbConnection");

const raceController = {};

raceController.addRace = async (req, res, next) => {
  const {
    race_year,
    race_name,
    race_distance,
    swim_distance,
    swim_time,
    swim_seconds,
    bike_distance,
    bike_time,
    bike_seconds,
    run_distance,
    run_time,
    run_seconds,
  } = req.body;

  console.log("adding race: ", req.body);
  const query = `INSERT INTO races (race_year, race_name, race_distance, swim_distance, swim_time, swim_seconds,
                                    bike_distance,
                                    bike_time, bike_seconds, run_distance, run_time, run_seconds)
                 VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12);`;

  const parameters = [
    race_year,
    race_name,
    race_distance,
    swim_distance,
    swim_time,
    +swim_seconds,
    bike_distance,
    bike_time,
    +bike_seconds,
    run_distance,
    run_time,
    +run_seconds,
  ];
  console.log(parameters);
  await db
    .query(query, parameters)
    .then((data) => {
      res.locals = data;
      return next();
    })
    .catch((err) => {
      next({
        log: `An error occurred in raceController addRace: ${err}`,
        message: {
          err: "An error occurred when adding a new race to the database -> raceController.addRace",
        },
      });
    });
};

raceController.editRace = async (req, res, next) => {};

raceController.deleteRace = async (req, res, next) => {};

raceController.getRaces = async (req, res, next) => {
  const query = "SELECT * FROM races";

  await db
    .query(query)
    .then((data) => {
      res.locals.races = data.rows;
      return next();
    })
    .catch((err) => {
      next({
        log: `An error occurred in raceController getRaces: ${err}`,
        message: {
          err: "An error occurred when trying to retrieve all races from the database -> raceController.getRaces",
        },
      });
    });
};

module.exports = raceController;
