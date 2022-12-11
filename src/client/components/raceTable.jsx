import React, { useState, useEffect } from "react";
import "./raceTable.css";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { parseRaceData } from "../services/parseRaceData";

const RaceTable = () => {
  const [raceList, setRaceList] = useState([]);
  const [raceTimes, setRaceTimes] = useState([]);

  const updateRaces = async () => {
    const parsedData = await parseRaceData();
    setRaceList(parsedData.table);
    setRaceTimes(parsedData.chart);
  };

  useEffect(() => {
    updateRaces();
  }, [raceList.length]);

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
  ];

  return (
    <Box
      key={"raceBox"}
      sx={{
        ml: 10,
        width: "80vw",
        height: "40vw",
        background: "#F6F5F5",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          mt: 0,
          mb: 1,
          color: "#002B5B",
          fontWeight: "bold",
        }}
      >
        Your Triathlons
      </Typography>
      <DataGrid
        sx={{
          bgcolor: "#145374",
          color: "#F6F5F5",
          fontSize: 18,
          textAlign: "center",
        }}
        columns={columns}
        rows={raceList}
        rowsPerPageOptions={[]}
        getRowId={(row) => row.id}
      ></DataGrid>
    </Box>
  );
};

export default RaceTable;
