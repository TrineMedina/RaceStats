import React from "react";
import RaceTable from "../components/raceTable";
import { Box } from "@mui/material";

const Dashboard = () => {
  return (
    <Box
      className="dashboard"
      component="main"
      // sx={{
      //   flexGrow: 1,
      //   pl: "4vw",
      // }}
    >
      <RaceTable />
    </Box>
  );
};

export default Dashboard;
