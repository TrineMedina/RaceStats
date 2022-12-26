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

  const optionsSwim = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Swim Times",
      },
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "Minutes",
        },
      },
    },
  };

  const optionsBike = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Bike Times",
      },
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "Hours",
        },
      },
    },
  };

  const optionsRun = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Run Times",
      },
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "Hours",
        },
      },
    },
  };

  const labels = raceList.map((race) => {
    return `${race.race_name} ${race.race_year}`;
  });

  const swimData = {
    type: "bar",
    labels,
    title: {
      display: true,
      text: "Swim Times",
    },
    datasets: [
      {
        label: "Swim Times",
        data: raceList.map((race) => {
          return race.swim_seconds / 60;
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
        margin: "auto",
      }}
    >
      <Bar options={optionsSwim} data={swimData} />
      <Bar options={optionsBike} data={bikeData} />
      <Bar options={optionsRun} data={runData} />
    </div>
  );
};

export default Chart;
