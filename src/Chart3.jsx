import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import data3 from "./Data3.json";

const Chart3 = (props) => {
  // const [chartData3, setChartData3] = useState({});

  // const requestOptions3 = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     accept: "application/json",
  //     "x-auth-token":
  //       "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyLXBxbGJZcVFHNmp2dyszeVZvKzFlS3pJUWl1M00yOXVzM1JzdTZMQUpvMmZ5blEyXC9ES1VWVEVTXC9SanFYZ0cwYzRWRWt3UytDaU95bVR0T1EyTjdtSG5lSTZFek11OVVPTm5KTHdiV3FXU0djMXc9PSIsImlzcyI6InJhaHVsa3VtYXIiLCJleHAiOjE2MTE0NjkxNTMsImlhdCI6MTYxMTM4Mjc1MywianRpIjoiOWU5OWQ3ZGE3OTFhZTdmZDQ5NjdhYjU1ZDcyMWU5YmNkMjMxZWY1OTgyNGZiMjhjYWExOWVkYTNiMDdjMDRiYjU1N2NjMWFjMTRjODI4YTExZGM3YmU5YjhiNWQ2YzE0OThjNDFkNjFjNGUzZTEwYjYyYWM0Mjg0YzJmZDQ0ZWRmMWUwZGY5ODZkMTVhN2NjMTZlYmNlNzhhZmIxMzg4NTc4MzdmYzY5NzYwZjQ1M2ZmZmRkYTM3YWFlNjhhNTEzMmIyZmZmZTQxNGYzZGU0YTY3NWUwM2MyZjk1MmRlNGI5MDdjMmQzZmFiMDgxYTM5NjMyM2I1MWExOTQxN2I0NCJ9.LEVPpRP4XhlL2_Li-VIqETOK3YvyyFhleBBnqwK-X0Y",
  //   },

  //   body: JSON.stringify(data3),
  // };

  // const chart3 = () => {
  //   let cm001 = [];
  //   let CM001_percent = [];
  //   let advertiserId = [];

  //   fetch("https://sigview.sigmoid.io/api/v1/getData", requestOptions3)
  //     .then((response) => response.json())
  //     .then((res) => {
  //       console.log(res);
  //       for (const dataObj of res.result.data) {
  //         cm001.push(parseInt(dataObj.cm001));
  //         CM001_percent.push(dataObj.CM001_percent);
  //         advertiserId.push(dataObj.advertiserId);
  //       }
  //       setChartData3({
  //         labels: advertiserId,
  //         datasets: [
  //           {
  //             label: "Data Analysis",
  //             data: CM001_percent,
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
  // };

  // useEffect(() => {
  //   chart3();
  // }, []);
  return (
    <div className="App">
      <h1>CHART - 3</h1>
      <div>
        <Pie
          data={props.chartData3}
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

export default Chart3;
