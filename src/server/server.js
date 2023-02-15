const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const app = express();

const raceRouter = require("./routes/raceRouter");

//This handles the CORS error occurring during fetch calls. For build, pass a callback
//with an array of accepted domains instead of true
app.use(require("cors")({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(path.resolve(__dirname, "../dist")));

app.use("/race", raceRouter);

app.get("/*", (req, res) => {
  res.redirect("/");
});

app.use("*", (req, res) => {
  res.status(404).send("Sorry - there is no such location.");
});

app.get("/", (err, req, res) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign(defaultErr, err);
  if (errorObj.log) console.log(errorObj);
  return res.status(errorObj.status).json(errorObj.message);
});

const PORT = 3000;
module.exports = app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});
