import calculateSeconds from "./calculateSeconds";
import concatRaceTimes from "./concatRaceTimes";

const SubmitRace = (race) => {
  console.log("fetching! ", race);

  const {
    raceYear,
    raceName,
    raceDistance,
    swimDistance,
    bikeDistance,
    runDistance,
  } = race;

  const swimTime = concatRaceTimes(
    race.swimHour,
    race.swimMinutes,
    race.swimSeconds
  );

  const bikeTime = concatRaceTimes(
    race.bikeHour,
    race.bikeMinutes,
    race.bikeSeconds
  );
  const runTime = concatRaceTimes(
    race.runHour,
    race.runMinutes,
    race.runSeconds
  );

  const swimSecondsTotal = calculateSeconds(
    race.swimHour,
    race.swimMinutes,
    race.swimSeconds
  );
  const bikeSecondsTotal = calculateSeconds(
    race.bikeHour,
    race.bikeMinutes,
    race.bikeSeconds
  );
  const runSecondsTotal = calculateSeconds(
    race.runHour,
    race.runMinutes,
    race.runSeconds
  );

  fetch("/race", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      race_year: raceYear,
      race_name: raceName,
      race_distance: raceDistance,
      swim_distance: swimDistance,
      swim_time: swimTime,
      swim_seconds: swimSecondsTotal,
      bike_distance: bikeDistance,
      bike_time: bikeTime,
      bike_seconds: bikeSecondsTotal,
      run_distance: runDistance,
      run_time: runTime,
      run_seconds: runSecondsTotal,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log("Error adding race to database ", err);
    });
};

export default SubmitRace;
