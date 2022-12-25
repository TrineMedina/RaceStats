import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useLocation } from "react-router-dom";

const Chart = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const location = useLocation();
  const raceList = location.state;
  console.log(raceList);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        // display: true,
        // text: "Race Comparison",
      },
    },
  };

  const labels = raceList.map((race) => race.race_name);

  const swimData = {
    labels,
    datasets: [
      {
        label: "Swim Times",
        data: raceList.map((race) => {
          return race.swim_seconds / 3600;
        }),
        backgroundColor: ["#FFBF00", "#540375", "#10A19D"],
      },
    ],
  };

  const bikeData = {
    labels,
    datasets: [
      {
        label: "Bike Times",
        data: raceList.map((race) => {
          return race.bike_seconds / 3600;
        }),
        backgroundColor: ["#FFBF00", "#540375", "#10A19D"],
      },
    ],
  };

  const runData = {
    labels,
    datasets: [
      {
        label: "Run Times",
        data: raceList.map((race) => {
          return race.run_seconds / 3600;
        }),
        backgroundColor: ["#FFBF00", "#540375", "#10A19D"],
      },
    ],
  };

  return (
    <div
      className="charts"
      style={{
        backgroundColor: "white",
        height: "100vw",
        width: "50%",
        overflowY: "auto",
      }}
    >
      <Bar options={options} data={swimData} />
      <Bar options={options} data={bikeData} />
      <Bar options={options} data={runData} />
    </div>
  );
};

export default Chart;
