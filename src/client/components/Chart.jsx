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
import "./chart.css";

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
        backgroundColor: ["#EE6F57"],
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
        backgroundColor: ["#EE6F57"],
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
        backgroundColor: ["#EE6F57"],
      },
    ],
  };

  return (
    <div className="chartContainer">
      <div className="chartWrapper">
        <Bar options={optionsSwim} data={swimData} />
      </div>
      <div className="chartWrapper">
        <Bar options={optionsBike} data={bikeData} />
      </div>
      <div className="chartWrapper">
        <Bar options={optionsRun} data={runData} />
      </div>
    </div>
  );
};

export default Chart;
