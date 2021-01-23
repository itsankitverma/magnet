import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import data2 from "./Data2.json";
import "./App.css";

const Chart2 = (props) => {
  const [chartData2, setChartData2] = useState({});

  // const requestOptions2 = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     accept: "application/json",
  //     "x-auth-token":
  //       "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyLXBxbGJZcVFHNmp2dyszeVZvKzFlS3pJUWl1M00yOXVzM1JzdTZMQUpvMmZ5blEyXC9ES1VWVEVTXC9SanFYZ0cwYzRWRWt3UytDaU95bVR0T1EyTjdtSG5lSTZFek11OVVPTm5KTHdiV3FXU0djMXc9PSIsImlzcyI6InJhaHVsa3VtYXIiLCJleHAiOjE2MTE0NjkxNTMsImlhdCI6MTYxMTM4Mjc1MywianRpIjoiOWU5OWQ3ZGE3OTFhZTdmZDQ5NjdhYjU1ZDcyMWU5YmNkMjMxZWY1OTgyNGZiMjhjYWExOWVkYTNiMDdjMDRiYjU1N2NjMWFjMTRjODI4YTExZGM3YmU5YjhiNWQ2YzE0OThjNDFkNjFjNGUzZTEwYjYyYWM0Mjg0YzJmZDQ0ZWRmMWUwZGY5ODZkMTVhN2NjMTZlYmNlNzhhZmIxMzg4NTc4MzdmYzY5NzYwZjQ1M2ZmZmRkYTM3YWFlNjhhNTEzMmIyZmZmZTQxNGYzZGU0YTY3NWUwM2MyZjk1MmRlNGI5MDdjMmQzZmFiMDgxYTM5NjMyM2I1MWExOTQxN2I0NCJ9.LEVPpRP4XhlL2_Li-VIqETOK3YvyyFhleBBnqwK-X0Y",
  //   },

  //   body: JSON.stringify(data2),
  // };

  // const chart = () => {
  //   let appSiteId = [];
  //   let impressions_offered = [];

  //   fetch("https://sigviewauth.sigmoid.io/api/v1/getData", requestOptions2)
  //     .then((response) => response.json())
  //     .then((res) => {
  //       console.log(res);
  //       for (const dataObj of res.result.data) {
  //         appSiteId.push(dataObj.appSiteId);
  //         impressions_offered.push(parseInt(dataObj.impressions_offered));
  //       }
  //       setChartData2({
  //         labels: appSiteId,
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
  //               "red",
  //               "blue",
  //               "green",
  //               "blue",
  //               "red",
  //               "blue",
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
  //               "red",
  //               "blue",
  //               "green",
  //               "blue",
  //               "red",
  //               "blue",
  //               "red",
  //               "blue",
  //               "green",
  //               "blue",
  //               "red",
  //               "blue",
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
  //   // console.log("this is app iste ", appSiteId);
  // };

  // useEffect(() => {
  //   chart();
  // }, []);
  return (
    <div className="App">
      <h1>CHART - 2</h1>
      <div>
        <Bar
          data={props.chartData2}
          options={{
            responsive: true,
            // title: { text: "THICCNESS SCALE", display: true },
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

export default Chart2;
