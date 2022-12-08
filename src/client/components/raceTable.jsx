import React, { useState, useMemo } from "react";
import "./raceTable.css";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const RaceTable = () => {
  //Using useMemo to take advantage of memoization when one race and/or few values
  //are updated

  const raceList = [
    { _id: "1", raceName: "Test1", year: "2022", raceDistance: "Sprint" },
    {
      _id: "2",
      raceName: "Test2",
      year: "2022",
      raceDistance: "Ironman70.3",
    },
  ];

  const columns = useMemo(() => {
    return [
      { field: "_id", hide: true },
      {
        field: "raceName",
        headerName: "Race",
        minWidth: 100,
        headerAlign: "center",
        hideable: false,
      },
      {
        field: "year",
        headerName: "Year",
        minWidth: 30,
        headerAlign: "center",
        hideable: false,
      },
      {
        field: "raceDistance",
        headerName: "Distance",
        flex: true,
        headerAlign: "center",
        hideable: false,
      },
      {
        field: "swimDistance",
        headerName: "Swim Dist.",
        flex: true,
        headerAlign: "center",
        hideable: false,
      },
      {
        field: "swimTime",
        headerName: "Swim Time",
        flex: true,
        headerAlign: "center",
        hideable: false,
      },
      {
        field: "bikeDistance",
        headerName: "Bike Dist.",
        flex: true,
        headerAlign: "center",
        hideable: false,
      },
      {
        field: "bikeTime",
        headerName: "Bike Time",
        flex: true,
        headerAlign: "center",
        hideable: false,
      },
      {
        field: "runDistance",
        headerName: "Run Dist.",
        flex: true,
        headerAlign: "center",
        hideable: false,
      },
      {
        field: "runTime",
        headerName: "Run Time",
        flex: true,
        headerAlign: "center",
        hideable: false,
      },
    ];
  }, raceList);

  return (
    <Box
      sx={{
        ml: 10,
        width: "80vw",
        height: "40vw",
        background: "8FE3CF",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          mt: 0,
          mb: 1,
          color: "#002B5B",
        }}
      >
        Race List
      </Typography>
      <DataGrid
        sx={{
          bgcolor: "#002B5B",
          color: "white",
          fontSize: 18,
          textAlign: "center",
        }}
        columns={columns}
        rows={raceList}
        rowsPerPageOptions={[]}
        getRowId={(row) => row._id}
      ></DataGrid>
    </Box>
  );
};

export default RaceTable;
