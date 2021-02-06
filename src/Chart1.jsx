import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import data1 from "./Data.json";

const Chart1 = () => {
  const [chartData, setChartData] = useState({});

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      "x-auth-token":
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyLXBOUUdrN3ljWG45NmpDa1BEQmRoc00yVjhhVnlVZ1B1VFdhdW1PV2FLS01SNzU2YVREbzUxM1BPb2xPVTlCbndUN3pZQk9PZVBDN1c1RXl0VldIb0NRQkgzRHUyeHhUUmk0TGdCUnh3SnhOaHB3PT0iLCJpc3MiOiJyYWh1bGt1bWFyIiwiZXhwIjoxNjEyNjk0NDEyLCJpYXQiOjE2MTI2MDgwMTIsImp0aSI6IjI0ODFjODI4YjhkMGU4MWE0YWE3OGM0ZGFhNDZiZGU4MmRiZjZlZGQ5MjAxMmNiZDBmMGRmYzEwZjJlM2M1NGE3MzE2OTUxYzc4YTllNWMxZjFlMTgxZWM2NmE5YTA3ZDQ2MTNmMDBiMjQwZDg1M2VmNGY3ODU1NDdhZGZjZTc2ZTEwYTkwNzIyM2ZhNTllYmQyYTY1Y2EwZWFkYTliMzBiZGJjMzUzZGY2MzkxYTBmMzQzMzZmMWU2NmJmN2ZmMmMyMzM2OTJjNmMxNzRlN2ZhMmYyMzcyMzdhMzQwYjhmM2YxN2IwYjQyZDA0YzQ2YzliMTQ0MzRhYjAyOTQ3YWYifQ.1DVKkblfARo3AXXHTYBMoaxbopx1_egRADkBTQBEt8g",
    },

    body: JSON.stringify(data1),
  };

  const chart = () => {
    let publisherId = [];
    let impressions_offered = [];

    fetch("https://sigviewauth.sigmoid.io/api/v1/getData", requestOptions)
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        for (const dataObj of res.result.data) {
          publisherId.push(dataObj.publisherId);
          impressions_offered.push(parseInt(dataObj.impressions_offered));
        }
        setChartData({
          labels: publisherId,
          datasets: [
            {
              label: "Data Analysis",
              data: impressions_offered,
              backgroundColor: [
                "red",
                "blue",
                "green",
                "blue",
                "red",
                "blue",
                "red",
                "blue",
                "green",
                "blue",
                "red",
                "blue",
                "red",
                "blue",
                "green",
                "blue",
                "red",
                "blue",
                "blue",
                "green",
                "blue",
                "red",
                "blue",
                "blue",
                "green",
                "blue",
                "red",
                "blue",
                "blue",
                "green",
                "blue",
                "red",
                "blue",
                "blue",
                "green",
                "blue",
                "red",
                "blue",
              ],

              fillColor: "rgba(220,220,220,0.5)",
              strokeColor: "rgba(220,220,220,0.8)",
              highlightFill: "rgba(220,220,220,0.75)",
              highlightStroke: "rgba(220,220,220,1)",
              borderWidth: 4,
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div className="App">
      <h1>CHART - 1</h1>
      <div>
        <Bar
          data={chartData}
          options={{
            responsive: true,
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true,
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
};

export default Chart1;
