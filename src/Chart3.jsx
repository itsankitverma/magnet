import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import data1 from "./Data3.json";

const Dankmemes = () => {
  const [chartData, setChartData] = useState({});
  const [employeeSalary, setEmployeeSalary] = useState([]);
  const [employeeAge, setEmployeeAge] = useState([]);

  // let url = "https://sigviewauth.sigmoid.io/api/v1/getData";

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      "x-auth-token":
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyLWVQYnBBbHk2VDVEWWNGYjh4WWtOYmJ4ZExRMjV5eUVMeXdmaGpSYkJxOWFjeE5wRTVuR2FmMnI4ZGJ4N1lWOEVXZm1qbmNZTmZxN3pCbEp0RzArMnBSc1d0N1BoSDlPTjZyTVZUSitMMXlLT3V3PT0iLCJpc3MiOiJyYWh1bGt1bWFyIiwiZXhwIjoxNjExMzkwMTg5LCJpYXQiOjE2MTEzMDM3ODksImp0aSI6IjIzM2FiZThhYTE5ZThmZGI5MmE2OGY3MmQyZGMxZThkYWRhNDA1YmZkMjgwMTQ2MDhhMTQ1YWM4MjdkZjcyZTdkZDgxODdiZTM4NWQ2MjFiMjhjN2EwN2I3NWY0ZGU2NDg4ZjE4MjY4YjJkZjI0ZGI3MDhjMjVjZWZhM2I2ZmE0ZWIyNWM2MjdhZGQ0ODcxZDBkMGE2NTBlNzc2ZDljNzgzNTJkNzNlMmYxNmYxY2VmYjhhMzM3Y2Y1NTFiNDM2ZGU4NGRhNjNhNzJjMWJlY2VhNGY4MTE5MDZiZjg4YTNkMGE0MzAxN2NmMmZmZGFmOTE5YjE3ZjIyNjQxOWIyYjMifQ.UaYHdG4PEj9Y9KDMsMZFEvpy8s2TxtREzGiwrGL5GPs",
    },

    body: JSON.stringify(data1),
  };
  // const a = []

  // fetch(url, requestOptions)
  //   .then((response) => response.json())
  //   // .then((datas) =>  setpublish({ datas }));
  //   .then((data) => {a.push(data.result.data)
  //   console.log(data)
  //   for (const dataObj of data.result.data) {
  //     identity.push(dataObj.publisherId)
  //     no.push(parseInt(dataObj.impressions_offered))
    // }}
    // );






  const chart = () => {
    let publisherId = [];
    let impressions_offered = [];
    let cm001 = [];
    let CM001_percent = [];
    let advertiserId = [];
    
      fetch("https://sigview.sigmoid.io/api/v1/getData", requestOptions)
      .then((response) => response.json())
      .then(res => {
        console.log(res);
        for (const dataObj of res.result.data) {
          cm001.push(parseInt(dataObj.cm001));
          CM001_percent.push(dataObj.CM001_percent);
          advertiserId.push(dataObj.advertiserId);
        }
        setChartData({
          labels: advertiserId, cm001,
          datasets: [
            {
              label: "level of thiccness",
              data: CM001_percent,
              backgroundColor: ["red", "blue", "green", "blue", "red", "blue", "blue", "green", "blue", "red", "blue", "blue", "green", "blue", "red", "blue", "blue", "green", "blue", "red", "blue", "blue", "green", "blue", "red", "blue"], 
 fillColor: "rgba(220,220,220,0.5)", 
              strokeColor: "rgba(220,220,220,0.8)", 
              highlightFill: "rgba(220,220,220,0.75)",
              highlightStroke: "rgba(220,220,220,1)",
              borderWidth: 4
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div className="App">
      <h1>CHART - 3</h1>
      <div>
        <Line
          data={chartData}
          options={{
            responsive: true,
            title: { text: "THICCNESS SCALE", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true
                  },
                  gridLines: {
                    display: false
                  }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}
        />
      </div>
    </div>
  );
};

export default Dankmemes;