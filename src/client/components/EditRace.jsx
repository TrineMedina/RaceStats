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
import { useNavigate, useLocation } from "react-router-dom";
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
import editRace from "../services/editRaceAPI";
import "./addRace.css";
import StyledButton from "./StyledButton";
import { getHours, getMinutes, getSeconds } from "../services/parseTimeString";

const EditRace = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("passed state: ", location.state);
  const [raceData, setRaceData] = useState({
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
    run_distance: location.state.bike_distance,
    run_hour: getHours(location.state.run_time),
    run_minutes: getMinutes(location.state.run_time),
    run_seconds: getSeconds(location.state.run_time),
  });

  useEffect(() => {
    setRaceData();
  }, []);

  const hours = getHoursList();
  const minutes = getMinutesList();
  const seconds = getSecondsList();
  const regExForId = /^[^-]*/;

  //Is this needed for editing location.state
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
      ...location.state,
      [id]: newValue,
    });
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
        Edit Race
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
            value={location.state.race_name}
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
            value={location.state.race_year}
            id="race_year"
            options={years()}
            renderInput={(params) => (
              <TextField {...params} label="Race Year" />
            )}
            isOptionEqualToValue={(option) => {
              return option.id === location.state.id;
            }}
            onChange={(event, value) => {
              handleChange(event, value);
            }}
          />
        </FormControl>
        <FormControl>
          <Autocomplete
            fullWidth={true}
            value={location.state.race_distance}
            id="race_distance"
            options={raceDistances()}
            renderInput={(params) => (
              <TextField {...params} label="Race Distance" />
            )}
            isOptionEqualToValue={(option) => {
              return option.id === location.state.id;
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
            value={location.state.swim_distance}
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
            value={location.state.swim_hour}
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
            value={location.state.swim_minutes}
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
            value={location.state.swim_seconds}
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
            value={location.state.bike_distance}
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
            value={location.state.bike_hour}
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
            value={location.state.bike_minutes}
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
            value={location.state.bike_seconds}
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
            value={location.state.run_distance}
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
            value={location.state.run_hour}
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
            value={location.state.run_minutes}
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
            value={location.state.run_minutes}
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
          onClick={() => {
            const wasUpdated = editRace(location.state);
            if (wasUpdated) {
              console.log("was updated");
              navigate("/home");
            }
          }}
        >
          Edit Race
        </StyledButton>
        <StyledButton
          onClick={() => {
            navigate("/home");
          }}
        >
          Cancel
        </StyledButton>
      </div>
    </div>
  );
};

export default EditRace;
