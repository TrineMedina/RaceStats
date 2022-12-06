import {
  Autocomplete,
  FormControl,
  Input,
  InputLabel,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Stack } from "@mui/system";
import {
  Hours,
  Minutes,
  Seconds,
  RaceDistances,
  SwimDistances,
  BikeDistances,
  RunDistances,
} from "../data";
import "../views/newRaceView.css";

const AddRace = () => {
  const [state, setState] = useState({
    raceYear: "",
    raceName: "",
    raceDistance: "",
    swimDistance: "",
    swimHour: "",
    swimMinutes: "",
    swimSeconds: "",
  });

  const hours = Hours();
  const minutes = Minutes();
  const seconds = Seconds();
  const raceDistances = RaceDistances();
  const swimDistances = SwimDistances();
  const bikeDistance = BikeDistances();
  const runDistance = RunDistances;

  const handleChange = (event, value) => {
    let [newValue, id] = "";
    if (!value) {
      newValue = event.target.value;
      id = event.target.id;
    } else {
      newValue = value.label;
      id = value.id;
    }
    setState({
      ...state,
      [id]: newValue,
    });
  };

  return (
    <div class="mainContainer">
      <Stack
        spacing={1}
        direction="row"
        sx={{ background: "yellow", padding: 2 }}
      >
        <FormControl>
          <InputLabel htmlFor="raceYear">Race Year</InputLabel>
          <Input id="raceYear" value={state.raceYear} onChange={handleChange} />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="raceName">Race Name</InputLabel>
          <Input id="raceName" value={state.raceName} onChange={handleChange} />
        </FormControl>
        <FormControl>
          <Autocomplete
            fullWidth={true}
            id="raceDistance"
            options={raceDistances}
            renderInput={(params) => (
              <TextField {...params} label="Race Distance" />
            )}
          />
        </FormControl>
      </Stack>
      <Stack spacing={1} direction="row" sx={{ background: "red", padding: 2 }}>
        <FormControl>
          <Autocomplete
            id="swimDistance"
            options={swimDistances}
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
        direction="row"
        sx={{ background: "purple", padding: 2 }}
      >
        <FormControl>
          <Autocomplete
            id="bikeDistance"
            options={BikeDistances()}
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
    </div>
  );
};

export default AddRace;
