import {
  Autocomplete,
  FormControl,
  Input,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Stack } from "@mui/system";
import {
  getHoursList,
  getMinutesList,
  getSecondsList,
  years,
  raceDistances,
  swimDistances,
  bikeDistances,
  runDistances,
} from "../data";
import submitRace from "../services/addRaceAPI";
import editRace from "../services/editRaceAPI";
import { useLocation, useNavigate } from "react-router-dom";
import "./addRace.css";
import StyledButton from "./StyledButton";
import { getHours, getMinutes, getSeconds } from "../services/parseTimeString";

const AddRace = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let isNewRace = true;
  let dataToUpdate;
  const raceToUpdate = [];
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
    if (raceToUpdate.length > 0) setRaceData(dataToUpdate);
  }, [raceToUpdate.length]);

  if (location.state) {
    const race = location.state[0];
    isNewRace = false;
    console.log(race.id);
    dataToUpdate = {
      id: race.id,
      race_year: race.race_year,
      race_name: race.race_name,
      race_distance: race.race_distance,
      swim_distance: race.swim_distance,
      swim_hour: getHours(race.swim_time),
      swim_minutes: getMinutes(race.swim_time),
      swim_seconds: getSeconds(race.swim_time),
      bike_distance: race.bike_distance,
      bike_hour: getHours(race.bike_time),
      bike_minutes: getMinutes(race.bike_time),
      bike_seconds: getSeconds(race.bike_time),
      run_distance: race.bike_distance,
      run_hour: getHours(race.run_time),
      run_minutes: getMinutes(race.run_time),
      run_seconds: getSeconds(race.run_time),
    };
    raceToUpdate.push(dataToUpdate);
  }

  const hours = getHoursList();
  const minutes = getMinutesList();
  const seconds = getSecondsList();
  const regExForId = /^[^-]*/;

  const handleChange = (event, value) => {
    let [newValue, id] = "";
    if (!value) {
      newValue = event.target.value;
      id = event.target.id;
    } else {
      newValue = value;
      id = regExForId.exec(event.target.id)[0];
    }
    setRaceData({
      ...raceData,
      [id]: newValue,
    });
  };

  const handleExitClick = () => {
    console.log("going home");
    navigate("/home");
  };

  return (
    <div className="mainContainer">
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          mt: "4vw",
          mb: 1,
          color: "#F6F5F5",
          fontWeight: "bold",
          fontSize: 35,
        }}
      >
        Add Race
      </Typography>
      <Stack
        spacing={1}
        direction={{ xs: "column", sm: "row" }}
        sx={{ padding: 1 }}
      >
        <FormControl>
          <InputLabel htmlFor="race_name">Race Name</InputLabel>
          <Input
            id="race_name"
            autoFocus={true}
            value={raceData.race_name}
            required={true}
            onChange={handleChange}
          />
        </FormControl>
      </Stack>
      <Stack
        spacing={1}
        direction={{ xs: "column", sm: "row" }}
        sx={{ padding: 1 }}
      >
        <FormControl>
          <Autocomplete
            fullWidth={true}
            value={raceData.race_year}
            id="race_year"
            options={years()}
            renderInput={(params) => (
              <TextField {...params} label="Race Year" />
            )}
            isOptionEqualToValue={(option) => {
              return option.id === raceData.id;
            }}
            onChange={(event, value) => {
              handleChange(event, value);
            }}
          />
        </FormControl>
        <FormControl>
          <Autocomplete
            fullWidth={true}
            value={raceData.race_distance}
            id="race_distance"
            options={raceDistances()}
            renderInput={(params) => (
              <TextField {...params} label="Race Distance" />
            )}
            isOptionEqualToValue={(option) => {
              return option.id === raceData.id;
            }}
            onChange={(event, value) => {
              handleChange(event, value);
            }}
          />
        </FormControl>
      </Stack>
      <Stack
        spacing={1}
        direction={{ xs: "column", sm: "row" }}
        sx={{ padding: 1 }}
      >
        <FormControl>
          <Autocomplete
            id="swim_distance"
            value={raceData.swim_distance}
            options={swimDistances()}
            autoHighlight
            renderInput={(params) => (
              <TextField {...params} label="Swim - Meters" />
            )}
            isOptionEqualToValue={(option, value) => {
              return option.id === value.id;
            }}
            onChange={(event, value) => {
              handleChange(event, value);
            }}
          />
        </FormControl>
        <FormControl>
          <Autocomplete
            id="swim_hour"
            value={raceData.swim_hour}
            options={hours}
            autoHighlight
            renderInput={(params) => (
              <TextField {...params} label="Swim - hours" />
            )}
            isOptionEqualToValue={(option, value) => {
              return option.id === value.id;
            }}
            onChange={(event, value) => {
              handleChange(event, value);
            }}
          />
        </FormControl>
        <FormControl>
          <Autocomplete
            id="swim_minutes"
            value={raceData.swim_minutes}
            options={minutes}
            autoHighlight
            renderInput={(params) => (
              <TextField {...params} label="Swim - minutes" />
            )}
            isOptionEqualToValue={(option, value) => {
              return option.id === value.id;
            }}
            onChange={(event, value) => {
              handleChange(event, value);
            }}
          />
        </FormControl>
        <FormControl>
          <Autocomplete
            id="swim_seconds"
            value={raceData.swim_seconds}
            options={seconds}
            autoHighlight
            renderInput={(params) => (
              <TextField {...params} label="Swim - seconds" />
            )}
            isOptionEqualToValue={(option, value) => {
              return option.id === value.id;
            }}
            onChange={(event, value) => {
              handleChange(event, value);
            }}
          />
        </FormControl>
      </Stack>
      {/*BIKE DATA*/}
      <Stack
        spacing={1}
        direction={{ xs: "column", sm: "row" }}
        sx={{ padding: 1 }}
      >
        <FormControl>
          <Autocomplete
            id="bike_distance"
            value={raceData.bike_distance}
            options={bikeDistances()}
            autoHighlight
            renderInput={(params) => (
              <TextField {...params} label="Bike - KM" />
            )}
            isOptionEqualToValue={(option, value) => {
              return option.id === value.id;
            }}
            onChange={(event, value) => {
              handleChange(event, value);
            }}
          />
        </FormControl>
        <FormControl>
          <Autocomplete
            id="bike_hours"
            value={raceData.bike_hour}
            options={hours}
            autoHighlight
            renderInput={(params) => (
              <TextField {...params} label="Bike - hours" />
            )}
            isOptionEqualToValue={(option, value) => {
              return option.id === value.id;
            }}
            onChange={(event, value) => {
              handleChange(event, value);
            }}
          />
        </FormControl>
        <FormControl>
          <Autocomplete
            id="bike_minutes"
            value={raceData.bike_minutes}
            options={minutes}
            autoHighlight
            renderInput={(params) => (
              <TextField {...params} label="Bike - minutes" />
            )}
            isOptionEqualToValue={(option, value) => {
              return option.id === value.id;
            }}
            onChange={(event, value) => {
              handleChange(event, value);
            }}
          />
        </FormControl>
        <FormControl>
          <Autocomplete
            id="bike_seconds"
            value={raceData.bike_seconds}
            options={seconds}
            autoHighlight
            renderInput={(params) => (
              <TextField {...params} label="Bike - seconds" />
            )}
            isOptionEqualToValue={(option, value) => {
              return option.id === value.id;
            }}
            onChange={(event, value) => {
              handleChange(event, value);
            }}
          />
        </FormControl>
      </Stack>
      {/*RUN DATA*/}
      <Stack
        spacing={1}
        direction={{ xs: "column", sm: "row" }}
        sx={{ padding: 1 }}
      >
        <FormControl>
          <Autocomplete
            id="run_distance"
            value={raceData.run_distance}
            options={runDistances()}
            autoHighlight
            renderInput={(params) => <TextField {...params} label="Run - KM" />}
            isOptionEqualToValue={(option, value) => {
              return option.id === value.id;
            }}
            onChange={(event, value) => {
              handleChange(event, value);
            }}
          />
        </FormControl>
        <FormControl>
          <Autocomplete
            id="run_hours"
            value={raceData.run_hour}
            options={hours}
            autoHighlight
            renderInput={(params) => (
              <TextField {...params} label="Run - hours" />
            )}
            isOptionEqualToValue={(option, value) => {
              return option.id === value.id;
            }}
            onChange={(event, value) => {
              handleChange(event, value);
            }}
          />
        </FormControl>
        <FormControl>
          <Autocomplete
            id="run_minutes"
            value={raceData.run_minutes}
            options={minutes}
            autoHighlight
            renderInput={(params) => (
              <TextField {...params} label="Run - minutes" />
            )}
            isOptionEqualToValue={(option, value) => {
              return option.id === value.id;
            }}
            onChange={(event, value) => {
              handleChange(event, value);
            }}
          />
        </FormControl>
        <FormControl>
          <Autocomplete
            id="run_seconds"
            value={raceData.run_minutes}
            options={seconds}
            autoHighlight
            renderInput={(params) => (
              <TextField {...params} label="Run - seconds" />
            )}
            isOptionEqualToValue={(option, value) => {
              return option.id === value.id;
            }}
            onChange={(event, value) => {
              handleChange(event, value);
            }}
          />
        </FormControl>
      </Stack>
      <div className="buttonWrapper">
        <StyledButton
          hidden={!isNewRace}
          onClick={() => {
            submitRace(raceData);
          }}
        >
          Add Race
        </StyledButton>
        <StyledButton
          hidden={isNewRace}
          onClick={() => {
            editRace(raceData);
          }}
        >
          Edit Race
        </StyledButton>
        <StyledButton onClick={handleExitClick}>Exit</StyledButton>
      </div>
    </div>
  );
};

export default AddRace;
