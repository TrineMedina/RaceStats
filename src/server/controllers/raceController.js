// const db = require();

const raceController = {};

raceController.addRace = async (req, res, next) => {
  console.log("adding race: ", req.body);
  // const query = `INSERT INTO races ;`;
  // const parameters = [req.body];
  // await db
  //   .query(query, parameters)
  //   .then((data) => {
  //     console.log(data);
  return next();
  // })
  // .catch((err) => {});
};

module.exports = raceController;
