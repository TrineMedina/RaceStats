import React, { useState, useEffect } from "react";
import "./raceTable.css";
import { Box, Typography } from "@mui/material";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import parseRaceData from "../services/parseRaceData";
import deleteRace from "../services/deleteRaceAPI";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import StyledButton from "./StyledButton";
import { useNavigate, useLocation } from "react-router-dom";
import { Stack } from "@mui/system";

const RaceTable = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [raceList, setRaceList] = useState([]);
  const [selectedRace, setSelectedRace] = useState([]);
  const [raceTimes, setRaceTimes] = useState([]);
  const user_id = location.state.user_id;

  /**
   * This function parses the race data that's received from the server. It's needed
   * because the objects returned have values that are only for the race table and
   * other values that are only for the chart
   */
  const updateRaceList = async () => {
    console.log("props: ", location.state.races);
    const parsedData = await parseRaceData(location.state.races);
    if (parsedData) {
      setRaceList(parsedData.table);
      setRaceTimes(parsedData.chart);
    }
  };

  useEffect(() => {
    if (raceList) {
      updateRaceList();
    }
  }, []);

  const handleDeleteButton = async (id) => {
    const wasDeleted = await deleteRace(id);
    if (wasDeleted) {
      setRaceList(raceList.filter((race) => race.id !== id));
    }
  };

  const handleEditButton = () => {
    if (selectedRace.length === 1) {
      //TODO Add promise and resolve to ensure the list is updated after the edits have been made to the database
      // right now it does a new api call -> could be changed to react query?
      const race = raceList.filter((race) => race.id === selectedRace[0]);
      navigate("/EditRace", { state: race[0] });
    } else {
      alert("Please select one race to edit");
    }
  };

  const handleCompareButton = () => {
    if (selectedRace.length > 1 && selectedRace.length < 4) {
      const races = [];
      selectedRace.forEach((raceId) => {
        const raceToCompare = raceTimes.filter((race) => {
          return race.id === +raceId;
        });
        races.push(...raceToCompare);
      });
      navigate("/Chart", { state: races });
    } else {
      alert("Please select two or three races to compare");
    }
  };

  const columns = [
    { field: "id", headerName: "id", hide: true },
    {
      field: "race_name",
      headerName: "Race",
      width: 100,
      headerAlign: "center",
      hideable: false,
    },
    {
      field: "race_year",
      headerName: "Year",
      width: 50,
      headerAlign: "center",
      hideable: false,
    },
    {
      field: "race_distance",
      headerName: "Distance",
      flex: true,
      headerAlign: "center",
      width: 100,
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
      width: 70,
      cellClassName: "actions",
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => handleDeleteButton(id)}
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
          fontSize: 35,
        }}
      >
        Your Triathlons
      </Typography>

      <DataGrid
        sx={{
          bgcolor: "#EE6F57",
          color: "#F6F5F5",
          fontSize: 12,
          textAlign: "center",
          margin: "auto",
          padding: 0,
          maxWidth: 1000,
        }}
        checkboxSelection={true}
        onSelectionModelChange={(race_id) => {
          setSelectedRace([...race_id]);
        }}
        selectionModel={selectedRace}
        pagination
        pageSize={5}
        rowsPerPageOptions={[5]}
        columns={columns}
        rows={raceList}
      ></DataGrid>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="center"
        sx={{
          padding: 1,
          background: "transparent",
          border: "none",
          minWidth: 200,
        }}
      >
        <StyledButton
          onClick={(event) => {
            handleCompareButton();
          }}
        >
          Compare Races
        </StyledButton>
        <StyledButton
          onClick={() => {
            navigate("/RaceData");
          }}
        >
          Add Race
        </StyledButton>
        <StyledButton
          onClick={(event) => {
            handleEditButton();
          }}
        >
          Edit Race
        </StyledButton>
      </Stack>
    </Box>
  );
};

export default RaceTable;
