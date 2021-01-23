import "./App.css";
import DatePicker from "./DatePicker";
import Chart2 from "./Chart2";
import Chart3 from "./Chart3";
import Buttons from "./Buttons";
import NewChart from "./NewChart";
import React, { useState, useEffect } from "react";
import data1 from "./Data.json";
import data2 from "./Data2.json";
import data3 from "./Data3.json";

function App() {
  const [chartData1, setChartData1] = useState({});
  const [newstartdate, setnewstartdate] = useState("");
  const [newenddate, setnewenddate] = useState("");
  const [chartData2, setChartData2] = useState({});
  const [chartData3, setChartData3] = useState({});

  let bgc = [
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
  ];

  const chart1 = () => {
    let chart1body = [
      {
        _id: "dashboard1516252439345",
        emailId: "candidate@sigmoid.com",
        orgViewReq: { organization: "DemoTest", view: "Auction" },
        chartObject: {
          metadata: {
            title: "chartobject:1516252439345",
            img_thumbnail: "../img/chart.png",
            chartType: "table",
            dataLimit: 50,
          },
          requestParam: {
            granularity: "hour",
            timeZone: { name: "UTC (+00:00)", location: "UTC" },
            dateRange: {
              startDate: newstartdate.toString(),
              endDate: newenddate.toString(),
            },
            xAxis: ["D044"],
            yAxis: ["M002"],
            approxCountDistinct: [],
            specialCalculation: [],
            filter: [],
            orderBy: { metricOrdByList: [{ id: "M002", desc: true }] },
            percentCalList: [],
          },
        },
      },
    ];

    let requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        "x-auth-token":
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyLXBxbGJZcVFHNmp2dyszeVZvKzFlS3pJUWl1M00yOXVzM1JzdTZMQUpvMmZ5blEyXC9ES1VWVEVTXC9SanFYZ0cwYzRWRWt3UytDaU95bVR0T1EyTjdtSG5lSTZFek11OVVPTm5KTHdiV3FXU0djMXc9PSIsImlzcyI6InJhaHVsa3VtYXIiLCJleHAiOjE2MTE0NjkxNTMsImlhdCI6MTYxMTM4Mjc1MywianRpIjoiOWU5OWQ3ZGE3OTFhZTdmZDQ5NjdhYjU1ZDcyMWU5YmNkMjMxZWY1OTgyNGZiMjhjYWExOWVkYTNiMDdjMDRiYjU1N2NjMWFjMTRjODI4YTExZGM3YmU5YjhiNWQ2YzE0OThjNDFkNjFjNGUzZTEwYjYyYWM0Mjg0YzJmZDQ0ZWRmMWUwZGY5ODZkMTVhN2NjMTZlYmNlNzhhZmIxMzg4NTc4MzdmYzY5NzYwZjQ1M2ZmZmRkYTM3YWFlNjhhNTEzMmIyZmZmZTQxNGYzZGU0YTY3NWUwM2MyZjk1MmRlNGI5MDdjMmQzZmFiMDgxYTM5NjMyM2I1MWExOTQxN2I0NCJ9.LEVPpRP4XhlL2_Li-VIqETOK3YvyyFhleBBnqwK-X0Y",
      },

      body: JSON.stringify(chart1body[0]),
    };
    let publisherId = [];
    let impressions_offered = [];

    fetch("https://sigviewauth.sigmoid.io/api/v1/getData", requestOptions)
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setChartData1(new Date());
        // console.log(startdate);

        for (const dataObj of res.result.data) {
          publisherId.push(dataObj.publisherId);
          impressions_offered.push(parseInt(dataObj.impressions_offered));
        }
        setChartData1({
          labels: publisherId,
          datasets: [
            {
              label: "Data Analysis",
              data: impressions_offered,
              backgroundColor: bgc,
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

  const requestOptions2 = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      "x-auth-token":
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyLXBxbGJZcVFHNmp2dyszeVZvKzFlS3pJUWl1M00yOXVzM1JzdTZMQUpvMmZ5blEyXC9ES1VWVEVTXC9SanFYZ0cwYzRWRWt3UytDaU95bVR0T1EyTjdtSG5lSTZFek11OVVPTm5KTHdiV3FXU0djMXc9PSIsImlzcyI6InJhaHVsa3VtYXIiLCJleHAiOjE2MTE0NjkxNTMsImlhdCI6MTYxMTM4Mjc1MywianRpIjoiOWU5OWQ3ZGE3OTFhZTdmZDQ5NjdhYjU1ZDcyMWU5YmNkMjMxZWY1OTgyNGZiMjhjYWExOWVkYTNiMDdjMDRiYjU1N2NjMWFjMTRjODI4YTExZGM3YmU5YjhiNWQ2YzE0OThjNDFkNjFjNGUzZTEwYjYyYWM0Mjg0YzJmZDQ0ZWRmMWUwZGY5ODZkMTVhN2NjMTZlYmNlNzhhZmIxMzg4NTc4MzdmYzY5NzYwZjQ1M2ZmZmRkYTM3YWFlNjhhNTEzMmIyZmZmZTQxNGYzZGU0YTY3NWUwM2MyZjk1MmRlNGI5MDdjMmQzZmFiMDgxYTM5NjMyM2I1MWExOTQxN2I0NCJ9.LEVPpRP4XhlL2_Li-VIqETOK3YvyyFhleBBnqwK-X0Y",
    },

    body: JSON.stringify(data2),
  };

  const chart4 = () => {
    let appSiteId = [];
    let impressions_offered = [];

    fetch("https://sigviewauth.sigmoid.io/api/v1/getData", requestOptions2)
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        for (const dataObj of res.result.data) {
          appSiteId.push(dataObj.appSiteId);
          impressions_offered.push(parseInt(dataObj.impressions_offered));
        }
        setChartData2({
          labels: appSiteId,
          datasets: [
            {
              label: "Data Analysis",
              data: impressions_offered,
              backgroundColor: bgc,
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

  const requestOptions3 = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      "x-auth-token":
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyLXBxbGJZcVFHNmp2dyszeVZvKzFlS3pJUWl1M00yOXVzM1JzdTZMQUpvMmZ5blEyXC9ES1VWVEVTXC9SanFYZ0cwYzRWRWt3UytDaU95bVR0T1EyTjdtSG5lSTZFek11OVVPTm5KTHdiV3FXU0djMXc9PSIsImlzcyI6InJhaHVsa3VtYXIiLCJleHAiOjE2MTE0NjkxNTMsImlhdCI6MTYxMTM4Mjc1MywianRpIjoiOWU5OWQ3ZGE3OTFhZTdmZDQ5NjdhYjU1ZDcyMWU5YmNkMjMxZWY1OTgyNGZiMjhjYWExOWVkYTNiMDdjMDRiYjU1N2NjMWFjMTRjODI4YTExZGM3YmU5YjhiNWQ2YzE0OThjNDFkNjFjNGUzZTEwYjYyYWM0Mjg0YzJmZDQ0ZWRmMWUwZGY5ODZkMTVhN2NjMTZlYmNlNzhhZmIxMzg4NTc4MzdmYzY5NzYwZjQ1M2ZmZmRkYTM3YWFlNjhhNTEzMmIyZmZmZTQxNGYzZGU0YTY3NWUwM2MyZjk1MmRlNGI5MDdjMmQzZmFiMDgxYTM5NjMyM2I1MWExOTQxN2I0NCJ9.LEVPpRP4XhlL2_Li-VIqETOK3YvyyFhleBBnqwK-X0Y",
    },

    body: JSON.stringify(data3),
  };

  const chart3 = () => {
    let cm001 = [];
    let CM001_percent = [];
    let advertiserId = [];

    fetch("https://sigview.sigmoid.io/api/v1/getData", requestOptions3)
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        for (const dataObj of res.result.data) {
          cm001.push(parseInt(dataObj.cm001));
          CM001_percent.push(dataObj.CM001_percent);
          advertiserId.push(dataObj.advertiserId);
        }
        setChartData3({
          labels: advertiserId,
          datasets: [
            {
              label: "Data Analysis",
              data: CM001_percent,
              backgroundColor: bgc,
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
    chart3();
    chart1();
    chart4();
  }, [newstartdate, newenddate]);

  const initdate = (startdate, enddate) => {
    setnewstartdate(
      Math.floor(new Date(startdate._d).getTime() / 1000.0) * 1000
    );
    setnewenddate(Math.floor(new Date(enddate._d).getTime() / 1000.0) * 1000);
  };
  const selectDateRange = (daterange) => {
    // console.log(
    //   "daterange is ",
    //   Math.floor(new Date(daterange.start._d).getTime() / 1000.0) * 1000
    // );
    // console.log(
    //   "endrange is ",
    //   Math.floor(new Date(daterange.end._d).getTime() / 1000.0) * 1000
    // );
    if (daterange.end._d) {
      setnewstartdate(
        Math.floor(new Date(daterange.start._d).getTime() / 1000.0) * 1000
      );
      setnewenddate(
        Math.floor(new Date(daterange.end._d).getTime() / 1000.0) * 1000
      );
    }
  };

  return (
    <>
      <div className="blocks">
        <h4>Data Analytics Application Dashboard</h4>
        <div className="h4">
          <DatePicker selectDateRange={selectDateRange} initdate={initdate} />
        </div>
        <div className="refresh">
          <Buttons />
        </div>
        <NewChart chartData1={chartData1} />
        <Chart2 chartData2={chartData2} />
        <Chart3 chartData3={chartData3} />
      </div>
    </>
  );
}

export default App;
