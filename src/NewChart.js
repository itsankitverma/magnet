import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import data1 from "./Data.json";

const NewChart = (props) => {
  // const [chartData, setChartData] = useState({});
  // const [startdate, setstartdate] = useState([]);

  // let url = "https://sigviewauth.sigmoid.io/api/v1/getData";

  data1.chartObject.requestParam.dateRange.startDate = "1493577000000";
  data1.chartObject.requestParam.dateRange.endDate = "1496255400000";
  console.log(data1.chartObject.requestParam.dateRange.startDate);

  // const requestOptions = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     accept: "application/json",
  //     "x-auth-token":
  //       "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyLWVQYnBBbHk2VDVEWWNGYjh4WWtOYmJ4ZExRMjV5eUVMeXdmaGpSYkJxOWFjeE5wRTVuR2FmMnI4ZGJ4N1lWOEVXZm1qbmNZTmZxN3pCbEp0RzArMnBSc1d0N1BoSDlPTjZyTVZUSitMMXlLT3V3PT0iLCJpc3MiOiJyYWh1bGt1bWFyIiwiZXhwIjoxNjExMzkwMTg5LCJpYXQiOjE2MTEzMDM3ODksImp0aSI6IjIzM2FiZThhYTE5ZThmZGI5MmE2OGY3MmQyZGMxZThkYWRhNDA1YmZkMjgwMTQ2MDhhMTQ1YWM4MjdkZjcyZTdkZDgxODdiZTM4NWQ2MjFiMjhjN2EwN2I3NWY0ZGU2NDg4ZjE4MjY4YjJkZjI0ZGI3MDhjMjVjZWZhM2I2ZmE0ZWIyNWM2MjdhZGQ0ODcxZDBkMGE2NTBlNzc2ZDljNzgzNTJkNzNlMmYxNmYxY2VmYjhhMzM3Y2Y1NTFiNDM2ZGU4NGRhNjNhNzJjMWJlY2VhNGY4MTE5MDZiZjg4YTNkMGE0MzAxN2NmMmZmZGFmOTE5YjE3ZjIyNjQxOWIyYjMifQ.UaYHdG4PEj9Y9KDMsMZFEvpy8s2TxtREzGiwrGL5GPs",
  //   },

  //   body: JSON.stringify(data1),
  // };
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

  // const chart = () => {
  //   let publisherId = [];
  //   let impressions_offered = [];

  //   fetch("https://sigviewauth.sigmoid.io/api/v1/getData", requestOptions)
  //     .then((response) => response.json())
  //     .then((res) => {
  //       console.log(res);
  //       setstartdate(new Date());
  //       console.log(startdate);

  //       for (const dataObj of res.result.data) {
  //         publisherId.push(dataObj.publisherId);
  //         impressions_offered.push(parseInt(dataObj.impressions_offered));
  //       }
  //       setChartData({
  //         labels: publisherId,
  //         datasets: [
  //           {
  //             label: "Data Analysis",
  //             data: impressions_offered,
  //             backgroundColor: [
  //               "red",
  //               "blue",
  //               "green",
  //               "blue",
  //               "red",
  //               "blue",
  //               "blue",
  //               "green",
  //               "blue",
  //               "red",
  //               "blue",
  //               "blue",
  //               "green",
  //               "blue",
  //               "red",
  //               "blue",
  //               "blue",
  //               "green",
  //               "blue",
  //               "red",
  //               "blue",
  //               "blue",
  //               "green",
  //               "blue",
  //               "red",
  //               "blue",
  //             ],
  //             fillColor: "rgba(220,220,220,0.5)",
  //             strokeColor: "rgba(220,220,220,0.8)",
  //             highlightFill: "rgba(220,220,220,0.75)",
  //             highlightStroke: "rgba(220,220,220,1)",
  //             borderWidth: 4,
  //           },
  //         ],
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   chart();
  // }, []);
  return (
    <div className="App">
      <h1>CHART - 1</h1>
      <div>
        <Bar
          data={props.chartData1}
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

export default NewChart;
