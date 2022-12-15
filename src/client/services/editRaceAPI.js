import calculateSeconds from "./calculateSeconds";
import concatRaceTimes from "./concatRaceTimes";

const editRace = (race) => {
  console.log("editing! ", race);

  const {
    id,
    race_year,
    race_name,
    race_distance,
    swim_distance,
    bike_distance,
    run_distance,
  } = race;

  const swim_time = concatRaceTimes(
    race.swim_hour,
    race.swim_minutes,
    race.swim_seconds
  );

  const bike_time = concatRaceTimes(
    race.bike_hour,
    race.bike_minutes,
    race.bike_seconds
  );
  const run_time = concatRaceTimes(
    race.run_hour,
    race.run_minutes,
    race.run_seconds
  );

  const swimSecondsTotal = calculateSeconds(
    race.swim_hour,
    race.swim_minutes,
    race.swim_seconds
  );
  const bikeSecondsTotal = calculateSeconds(
    race.bike_hour,
    race.bike_minutes,
    race.bike_seconds
  );
  const runSecondsTotal = calculateSeconds(
    race.run_hour,
    race.run_minutes,
    race.run_seconds
  );

  console.log("race body: ", race);

  fetch("/race", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
      race_year,
      race_name,
      race_distance,
      swim_distance,
      swim_time,
      swim_seconds: swimSecondsTotal,
      bike_distance,
      bike_time,
      bike_seconds: bikeSecondsTotal,
      run_distance,
      run_time,
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

export default editRace;
