import getRaces from "./getRacesAPI";

const parseRaceData = async (races) => {
  const racesForTable = [];
  const raceDataForChart = [];

  // const updatedRaceList = await getRaces();
  const updatedRaceList = races;
  console.log(updatedRaceList);

  // if (updatedRaceList.length < 1) {
  if (!Array.isArray(updatedRaceList)) {
    console.log("no race lists");
    return;
  }

  await updatedRaceList.forEach((race) => {
    const {
      race_id,
      race_name,
      race_year,
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
    } = race;

    racesForTable.push({
      id: `${race_id}`,
      race_name,
      race_year,
      race_distance,
      swim_distance,
      swim_time,
      bike_distance,
      bike_time,
      run_distance,
      run_time,
    });

    raceDataForChart.push({
      race_id,
      race_name,
      race_year,
      swim_seconds,
      bike_seconds,
      run_seconds,
    });
  });

  return { table: racesForTable, chart: raceDataForChart };
};

export default parseRaceData;
