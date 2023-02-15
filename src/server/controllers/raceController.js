const db = require("../models/dbConnection");

const raceController = {};

raceController.addRace = async (req, res, next) => {
  console.log("adding race");
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
    user_id,
  } = req.body;

  // console.log("adding race: ", req.body);
  const query = `INSERT INTO races (race_year, race_name, race_distance, swim_distance, swim_time, swim_seconds,
                                    bike_distance, bike_time, bike_seconds, run_distance, run_time, run_seconds, user_id)
                 VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13);`;

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
  await db
    .query(query, parameters)
    .then((data) => {
      res.locals.race = data;
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

raceController.editRace = async (req, res, next) => {
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
    id,
  } = req.body;

  const query = `UPDATE races
                 SET race_year     = $1,
                     race_name     = $2,
                     race_distance = $3,
                     swim_distance = $4,
                     swim_time     = $5,
                     swim_seconds  = $6,
                     bike_distance = $7,
                     bike_time     = $8,
                     bike_seconds  = $9,
                     run_distance  = $10,
                     run_time      = $11,
                     run_seconds   = $12
                 WHERE id = $13 RETURNING *`;

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
    +id,
  ];

  db.query(query, parameters)
    .then((data) => {
      if (data.rowCount === 1) {
        res.locals.race = data.rows;
      } else {
        res.locals.race = false;
      }
      next();
    })
    .catch((err) => {
      next({
        log: `An error occurred in raceController updateRace: ${err}`,
        message: {
          err: "An error occurred when updating a race in the database -> raceController.updateRace",
        },
      });
    });
};

raceController.deleteRace = async (req, res, next) => {
  const { id } = req.body;

  const query = `DELETE
                 FROM races
                 WHERE id = '${id}' RETURNING *`;

  db.query(query)
    .then((data) => {
      console.log("Race deleted: ", data);
      res.locals.race = data.rows;
      return next();
    })
    .catch((err) => {
      next({
        log: `An error occurred in raceController deleteRace: ${err}`,
        message: {
          err: "An error occurred when deleting a race from the database -> raceController.deleteRace",
        },
      });
    });
};

raceController.getRaces = async (req, res, next) => {
  console.log("is auth? ", res.locals.auth);
  if (res.locals.auth) {
    const { user_id } = res.locals;
    const query = "SELECT * FROM races";
    // const parameter = [user_id];

    await db
      .query(query)
      .then((data) => {
        console.log("in get races: ", data.rows);
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
  } else return next();
};

module.exports = raceController;
