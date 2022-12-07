import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { StrictMode } from "react";
import Chart from "./views/chartView";
import Main from "./views/mainView";
import NewRace from "./views/newRaceView";
import { StyledEngineProvider } from "@mui/system";

export default function App() {
  return (
    <StrictMode>
      <StyledEngineProvider>
        <NewRace />
        {/*<BrowserRouter>*/}
        {/*  <Routes>*/}
        {/*    <Route path="/" element={<Main />} />*/}
        {/*    <Route path="new" element={<NewRace />} />*/}
        {/*    <Route path="chart" element={<Chart />} />*/}
        {/*  </Routes>*/}
        {/*</BrowserRouter>*/}
      </StyledEngineProvider>
    </StrictMode>
  );
}
