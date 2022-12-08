import React from "react";
import RaceTable from "../components/raceTable";

const Main = () => {
  //DataGrid render of race data
  //Should include radio buttons to select several races -> max is 5?
  //Button to add race -> should open modal with addRace view
  //Button to delete/update race -> should open small DataGrid view with option to only
  //select one race
  //Button to compare races -> should open modal with charts
  return (
    <div style={{ background: "#8FE3CF" }}>
      <RaceTable />
      //Buttons
    </div>
  );
};

export default Main;
