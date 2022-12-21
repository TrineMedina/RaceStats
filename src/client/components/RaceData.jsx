/**
 * TODO This component is large - look into creating the elements dynamically
 */
import {
  Autocomplete,
  FormControl,
  Input,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
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
import addRace from "../services/addRaceAPI";
import editRace from "../services/editRaceAPI";
import { useNavigate } from "react-router-dom";
import "./addRace.css";
import StyledButton from "./StyledButton";

const RaceData = (props) => {
  const {
    race_year,
    race_name,
    race_distance,
    swim_distance,
    swim_hour,
    swim_minutes,
    swim_seconds,
    bike_distance,
    bike_hour,
    bike_minutes,
    bike_seconds,
    run_distance,
    run_hour,
    run_minutes,
    run_seconds,
  } = props;

  const [raceData, setRaceData] = useState(props);
  const navigate = useNavigate();
  const hours = getHoursList();
  const minutes = getMinutesList();
  const seconds = getSecondsList();
  const regExForId = /^[^-]*/;

  const handleChange = (event, value) => {
    let [newValue, id] = "";

    if (!value) {
      //Standard event
      newValue = event.target.value;
      id = event.target.id;
    } else {
      //Autocomplete event -> value and modified Id is passed, so the Id has
      // to be parsed before state is updated
      newValue = value;
      id = regExForId.exec(event.target.id)[0];
    }

    setRaceData({
      ...raceData,
      [id]: newValue,
    });
  }; //End of handleChange

  const handleSubmit = () => {
    let wasCompleted;
    if (props.id) {
      wasCompleted = editRace({ ...raceData, id: props.id });
    } else {
      wasCompleted = addRace(raceData);
    }
    if (wasCompleted) navigate("/Race");
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
        Race Data
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
            value={race_name}
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
            value={race_year}
            id="race_year"
            options={years()}
            required={true}
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
            value={race_distance}
            id="race_distance"
            options={raceDistances()}
            required={true}
            renderInput={(params) => (
              <TextField {...params} label="Race Dist." />
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
            value={swim_distance}
            options={swimDistances()}
            autoHighlight
            renderInput={(params) => <TextField {...params} label="Swim - M" />}
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
            value={swim_hour}
            options={hours}
            autoHighlight
            renderInput={(params) => (
              <TextField {...params} label="Swim - Hrs." />
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
            value={swim_minutes}
            options={minutes}
            autoHighlight
            renderInput={(params) => (
              <TextField {...params} label="Swim - Min." />
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
            value={swim_seconds}
            options={seconds}
            autoHighlight
            renderInput={(params) => (
              <TextField {...params} label="Swim - Sec." />
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
            value={bike_distance}
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
            id="bike_hour"
            value={bike_hour}
            options={hours}
            autoHighlight
            renderInput={(params) => (
              <TextField {...params} label="Bike - Hrs." />
            )}
            isOptionEqualToValue={(option, value) => {
              return option.id === value.id;
            }}
            onChange={(event, value) => {
              console.log("event and value - bike hours: ", event, value);
              handleChange(event, value);
            }}
          />
        </FormControl>
        <FormControl>
          <Autocomplete
            id="bike_minutes"
            value={bike_minutes}
            options={minutes}
            autoHighlight
            renderInput={(params) => (
              <TextField {...params} label="Bike - Min." />
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
            value={bike_seconds}
            options={seconds}
            autoHighlight
            renderInput={(params) => (
              <TextField {...params} label="Bike - Sec." />
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
            value={run_distance}
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
            id="run_hour"
            value={run_hour}
            options={hours}
            autoHighlight
            renderInput={(params) => (
              <TextField {...params} label="Run - Hrs." />
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
            value={run_minutes}
            options={minutes}
            autoHighlight
            renderInput={(params) => (
              <TextField {...params} label="Run - Min." />
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
            value={run_seconds}
            options={seconds}
            autoHighlight
            renderInput={(params) => (
              <TextField {...params} label="Run - Sec." />
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
        <StyledButton onClick={handleSubmit}>Submit</StyledButton>
        <StyledButton
          onClick={() => {
            navigate("/home");
          }}
        >
          Exit
        </StyledButton>
      </div>
    </div>
  );
};

export default RaceData;
