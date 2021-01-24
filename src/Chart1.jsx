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
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyLU04eXViQStHRUlOQ2d2UTNKQTNVM1ZvYzRcL25HNE1EelkwdEp6dTAzS2g5OWoxNWhsQURPVTNLOFljU2pyWWc2XC9rdjIwUHl5aHpSMlp4Z2ZhbWswZGFRZ1wvaHplZEVRQlUwbVp6QnRNZTRaTHVBPT0iLCJpc3MiOiJyYWh1bGt1bWFyIiwiZXhwIjoxNjExNTU2NTg4LCJpYXQiOjE2MTE0NzAxODgsImp0aSI6IjU4OWEyZDYyM2E1ZDNkZDE1NDZmYzYzM2QyZGEzMDBhZTE3MGI1MjBiMDgxOWI3MTllNTRjNTdjMGYwNTlkNjUyY2ZmNzNiMDEwNjk5ZmRiMzBjZDQyMDQ4NTQ4ZWFlN2M3YWY2YmU3NjNmMTFiODllNTQyNGY5ZjdiOWUxODYwNWQ4YTI0ZGU3ZTg2NGUzNTNhYjhkMWE5OTY2OGFjOTgyNTQ1OGEwZGM3M2NjNzcxYTNjN2VkNjlhMmU4YWQwYjVlMGZlNmRkZGQ4N2ViNzJjMzcyMTg5MzAxZmNjMjZjZjIwMDU5MjA2NjRlNTViZmYxZTg3NWMwOWIwN2ZjNTEifQ.XZU5ztI82f914PCSM-uHfMFsJ1e5lggrxmnHJZxh2FU",
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
