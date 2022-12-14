import {
  Autocomplete,
  Button,
  FormControl,
  Input,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { createTheme, Stack } from "@mui/system";
import {
  Hours,
  Minutes,
  Seconds,
  Years,
  RaceDistances,
  SwimDistances,
  BikeDistances,
  RunDistances,
} from "../data";
import SubmitRace from "../services/addRaceAPI";
import "../views/newRaceView.css";
import { useNavigate } from "react-router-dom";
import "./addRace.css";
import StyledButton from "./StyledButton";

const AddRace = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    raceYear: "",
    raceName: "",
    raceDistance: "",
    swimDistance: "",
    swimHour: "",
    swimMinutes: "",
    swimSeconds: "",
    bikeDistance: "",
    bikeHour: "",
    bikeMinutes: "",
    bikeSeconds: "",
    runDistance: "",
    runHour: "",
    runMinutes: "",
    runSeconds: "",
  });

  const hours = Hours();
  const minutes = Minutes();
  const seconds = Seconds();
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
    setState({
      ...state,
      [id]: newValue,
    });
  };

  const handleDoneClick = () => {
    console.log("going home");
    navigate("/home");
  };

  return (
    // <StyledEngineProvider>
    <div className="mainContainer">
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          mt: "3vw",
          mb: 1,
          color: "#F6F5F5",
          fontWeight: "bold",
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
          <InputLabel htmlFor="raceName">Race Name</InputLabel>
          <Input
            id="raceName"
            autoFocus={true}
            value={state.raceName}
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
            autoComplete={true}
            id="raceYear"
            options={Years()}
            renderInput={(params) => (
              <TextField {...params} label="Race Year" />
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
            fullWidth={true}
            id="raceDistance"
            options={RaceDistances()}
            renderInput={(params) => (
              <TextField {...params} label="Race Distance" />
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
      <Stack
        spacing={1}
        direction={{ xs: "column", sm: "row" }}
        sx={{ padding: 1 }}
      >
        <FormControl>
          <Autocomplete
            id="swimDistance"
            options={SwimDistances()}
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
            id="swimHour"
            options={hours}
            autoHighlight
            renderInput={(params) => (
              <TextField {...params} label="Swim - Hours" />
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
            id="swimMinutes"
            options={minutes}
            autoHighlight
            renderInput={(params) => (
              <TextField {...params} label="Swim - Minutes" />
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
            id="swimSeconds"
            options={seconds}
            autoHighlight
            renderInput={(params) => (
              <TextField {...params} label="Swim - Seconds" />
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
            id="bikeDistance"
            options={BikeDistances()}
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
            id="bikeHours"
            options={hours}
            autoHighlight
            renderInput={(params) => (
              <TextField {...params} label="Bike - Hours" />
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
            id="bikeMinutes"
            options={minutes}
            autoHighlight
            renderInput={(params) => (
              <TextField {...params} label="Bike - Minutes" />
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
            id="bikeSeconds"
            options={seconds}
            autoHighlight
            renderInput={(params) => (
              <TextField {...params} label="Bike - Seconds" />
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
            id="runDistance"
            options={RunDistances()}
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
            id="runHours"
            options={hours}
            autoHighlight
            renderInput={(params) => (
              <TextField {...params} label="Run - Hours" />
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
            id="runMinutes"
            options={minutes}
            autoHighlight
            renderInput={(params) => (
              <TextField {...params} label="Run - Minutes" />
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
            id="runSeconds"
            options={seconds}
            autoHighlight
            renderInput={(params) => (
              <TextField {...params} label="Run - Seconds" />
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
            SubmitRace(state);
          }}
        >
          Submit
        </StyledButton>
        <StyledButton onClick={handleDoneClick}>Done</StyledButton>
      </div>
    </div>
    // </StyledEngineProvider>
  );
};

export default AddRace;
