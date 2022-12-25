import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./raceData.css";
import { getHours, getMinutes, getSeconds } from "../services/parseTimeString";
import RaceData from "./RaceData";

const EditRace = () => {
  const location = useLocation();
  const [raceData, setRaceData] = useState({
    race_year: "",
    race_name: "",
    race_distance: "",
    swim_distance: "",
    swim_hour: "",
    swim_minutes: "",
    swim_seconds: "",
    bike_distance: "",
    bike_hour: "",
    bike_minutes: "",
    bike_seconds: "",
    run_distance: "",
    run_hour: "",
    run_minutes: "",
    run_seconds: "",
  });

  useEffect(() => {
    setRaceData({
      id: location.state.id,
      race_year: location.state.race_year,
      race_name: location.state.race_name,
      race_distance: location.state.race_distance,
      swim_distance: location.state.swim_distance,
      swim_hour: getHours(location.state.swim_time),
      swim_minutes: getMinutes(location.state.swim_time),
      swim_seconds: getSeconds(location.state.swim_time),
      bike_distance: location.state.bike_distance,
      bike_hour: getHours(location.state.bike_time),
      bike_minutes: getMinutes(location.state.bike_time),
      bike_seconds: getSeconds(location.state.bike_time),
      run_distance: location.state.run_distance,
      run_hour: getHours(location.state.run_time),
      run_minutes: getMinutes(location.state.run_time),
      run_seconds: getSeconds(location.state.run_time),
    });
  }, []);

  return (
    <RaceData
      id={location.state.id}
      race_year={location.state.race_year}
      race_name={location.state.race_name}
      race_distance={location.state.race_distance}
      swim_distance={location.state.swim_distance}
      swim_hour={getHours(location.state.swim_time)}
      swim_minutes={getMinutes(location.state.swim_time)}
      swim_seconds={getSeconds(location.state.swim_time)}
      bike_distance={location.state.bike_distance}
      bike_hour={getHours(location.state.bike_time)}
      bike_minutes={getMinutes(location.state.bike_time)}
      bike_seconds={getSeconds(location.state.bike_time)}
      run_distance={location.state.run_distance}
      run_hour={getHours(location.state.run_time)}
      run_minutes={getMinutes(location.state.run_time)}
      run_seconds={getSeconds(location.state.run_time)}
    />
  );
};

export default EditRace;
