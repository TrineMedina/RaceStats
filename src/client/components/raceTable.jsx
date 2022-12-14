import React, { useState, useEffect } from "react";
import "./raceTable.css";
import { Box, Button, Typography } from "@mui/material";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { parseRaceData } from "../services/parseRaceData";
import deleteRace from "../services/deleteRaceAPI";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import AddRace from "./addRace";
import StyledButton from "./StyledButton";
import { useNavigate } from "react-router-dom";

const RaceTable = () => {
  const [raceList, setRaceList] = useState([{ id: "initial" }]);
  const [selectedRace, setSelectedRace] = useState([]);
  const [raceTimes, setRaceTimes] = useState([]);
  const [checkbox, setCheckbox] = useState(true);
  const navigate = useNavigate();

  const updateRaceList = async () => {
    const parsedData = await parseRaceData();
    setRaceList(parsedData.table);
    setRaceTimes(parsedData.chart);
  };

  useEffect(() => {
    if (raceList) {
      updateRaceList();
    }
  }, [raceList.length]);

  const handleDeleteButton = async (id) => {
    const wasDeleted = await deleteRace(id);
    if (wasDeleted) {
      setRaceList(raceList.filter((race) => race.id !== id));
    }
  };

  const handleEditButton = () => {
    if (selectedRace.length === 1) {
      //TODO Add promise and resolve to ensure the list is updated after the edits?
      const race = raceList.filter((race) => race.id === selectedRace[0]);
      navigate("/addRace", { state: race });
    } else {
      //TODO Figure out how to clear the checkmarks
      alert("Please only select one race to edit");
      setSelectedRace([]);
      setCheckbox(!checkbox);
    }
  };

  const columns = [
    { field: "id", headerName: "id", hide: true },
    {
      field: "race_name",
      headerName: "Race",
      minWidth: 100,
      headerAlign: "center",
      hideable: false,
    },
    {
      field: "race_year",
      headerName: "Year",
      minWidth: 30,
      headerAlign: "center",
      hideable: false,
    },
    {
      field: "race_distance",
      headerName: "Distance",
      flex: true,
      headerAlign: "center",
      hideable: false,
    },
    {
      field: "swim_distance",
      headerName: "Swim Dist.",
      flex: true,
      headerAlign: "center",
      hideable: false,
    },
    {
      field: "swim_time",
      headerName: "Swim Time",
      flex: true,
      headerAlign: "center",
      hideable: false,
    },
    {
      field: "bike_distance",
      headerName: "Bike Dist.",
      flex: true,
      headerAlign: "center",
      hideable: false,
    },
    {
      field: "bike_time",
      headerName: "Bike Time",
      flex: true,
      headerAlign: "center",
      hideable: false,
    },
    {
      field: "run_distance",
      headerName: "Run Dist.",
      flex: true,
      headerAlign: "center",
      hideable: false,
    },
    {
      field: "run_time",
      headerName: "Run Time",
      flex: true,
      headerAlign: "center",
      hideable: false,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Delete",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => handleDeleteButton(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box key={"raceBox"} className="raceBox">
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          mt: 0,
          mb: 1,
          color: "#F6F5F5",
          fontWeight: "bold",
        }}
      >
        Your Triathlons
      </Typography>

      <DataGrid
        sx={{
          bgcolor: "#EE6F57",
          color: "#F6F5F5",
          fontSize: 18,
          textAlign: "center",
          border: "4px solid #EE6F57",
          boxShadow: 12,
          margin: 1,
          padding: 0,
          minHeight: "21vw",
        }}
        checkboxSelection={checkbox}
        onSelectionModelChange={(id) => {
          setSelectedRace([...id]);
        }}
        columns={columns}
        rows={raceList}
        rowsPerPageOptions={[]}
      ></DataGrid>
      <StyledButton
        variant="contained"
        onClick={() => {
          console.log("clicking compare");
        }}
      >
        Compare Races
      </StyledButton>
      <StyledButton
        onClick={() => {
          navigate("addRace");
        }}
      >
        Add Race
      </StyledButton>
      <StyledButton
        onClick={(event) => {
          console.log(event);
          handleEditButton();
        }}
      >
        Edit Race
      </StyledButton>
    </Box>
  );
};

export default RaceTable;
