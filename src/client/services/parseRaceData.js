import getRaces from "./getRacesAPI";

const parseRaceData = async () => {
  const racesForTable = [];
  const raceDataForChart = [];

  const updatedRaceList = await getRaces();

  await updatedRaceList.forEach((race) => {
    const {
      id,
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
      id: `${id}`,
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

    raceDataForChart.push({ id, swim_seconds, bike_seconds, run_seconds });
  });

  return { table: racesForTable, chart: raceDataForChart };
};

export default parseRaceData;
