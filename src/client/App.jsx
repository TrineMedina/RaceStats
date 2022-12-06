import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { StrictMode } from "react";
import Chart from "./views/chartView";
import Main from "./views/mainView";
import NewRace from "./views/newRaceView";

export default function App() {
  return (
    <StrictMode>
      <NewRace />
      {/*<BrowserRouter>*/}
      {/*  <Routes>*/}
      {/*    <Route path="/" element={<Main />} />*/}
      {/*    <Route path="new" element={<NewRace />} />*/}
      {/*    <Route path="chart" element={<Chart />} />*/}
      {/*  </Routes>*/}
      {/*</BrowserRouter>*/}
    </StrictMode>
  );
}
