const db = require("../models/dbConnection");

const authController = {};

authController.authUser = async (req, res, next) => {
  const { user_name, password } = req.body;

  const query = "SELECT * FROM users WHERE user_name = $1";
  const parameters = [user_name];

  await db
    .query(query, parameters)
    .then((data) => {
      if (data.rows[0].password === password) {
        res.locals.auth = true;
        res.locals.user_id = data.rows.user_id;
      } else {
        res.locals.auth = false;
      }
      return next();
    })
    .catch((err) => {
      next({
        log: `An error occurred in authController authUser: ${err}`,
        message: {
          err: "An error occurred when trying to authenticate the user -> authController.authUser",
        },
      });
    });
};

module.exports = authController;
