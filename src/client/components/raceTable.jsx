import React, { useState, useEffect } from "react";
import "./raceTable.css";
import { Box, Button, Typography } from "@mui/material";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { parseRaceData } from "../services/parseRaceData";
import deleteRace from "../services/deleteRaceAPI";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import AddRace from "./addRace";

const RaceTable = () => {
  const [raceList, setRaceList] = useState([{ id: "initial" }]);
  const [raceTimes, setRaceTimes] = useState([]);

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
    <Box
      key={"raceBox"}
      sx={{
        ml: 10,
        width: "80vw",
        height: "45vw",
        background: "#00334E",
      }}
    >
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
        checkboxSelection={true}
        onSelectionModelChange={(id) => console.log(id)}
        columns={columns}
        rows={raceList}
        rowsPerPageOptions={[]}
      ></DataGrid>
      <Button onClick={AddRace}>Add Race</Button>
      <Button
        onClick={() => {
          console.log("clicking compare");
        }}
      >
        Compare Races
      </Button>
    </Box>
  );
};

export default RaceTable;
