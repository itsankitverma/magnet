import "./App.css";
import DatePicker from "./DatePicker";
import Chart2 from "./Chart2";
import Chart3 from "./Chart3";
import Buttons from "./Buttons";
import NewChart from "./NewChart";
import React, { useState, useEffect } from "react";

function App() {
  const [chartData1, setChartData1] = useState({});
  const [newstartdate, setnewstartdate] = useState("");
  const [newstartdate2, setnewstartdate2] = useState("");
  const [newstartdate3, setnewstartdate3] = useState("");
  const [newenddate, setnewenddate] = useState("");
  const [newenddate2, setnewenddate2] = useState("");
  const [newenddate3, setnewenddate3] = useState("");
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

  // first chart dynamic

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
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyLXlMSVFIcTBIVTMzM2NRQk1oTVwvT2psZTlyeUp4cG1hSjJYaTNDNHp2T2dlSGk2QnhRUGRCSnRGVEErRFFqdVhHT2RJbUlvSkZHQk5iUjQzRGRFVnc3OHM2bUdMVkphNTFlcnoySnpnRlJBYzZuZz09IiwiaXNzIjoicmFodWxrdW1hciIsImV4cCI6MTYxMjY5Mjc2NSwiaWF0IjoxNjEyNjA2MzY1LCJqdGkiOiJjZjQzMDBhZTZkMmI2MGZiODY0ODY1N2JmYzIyMWU2Y2JkMjkyNzE2ZThiYTc4M2JlNDFmYTY4OGNhM2VkNjAwYjhlZjk2YWY5M2NjMzM2MWY0NGFjOTZjMzFkNzliMTMwY2E2YzI4OGJhMGRjYzczZDBkODliMmUxMDE3NmM2ZmQ5NjJjOWVjMjY2Yjg2NzE4ZTZiNGVkOGJmYjQ1N2NhMDQ5MzliYWJkNzc0YjY4M2U0M2M0ODBlOTU0MjU3NWQyYWNkODZhZWY5ZGVjNDY0YjgzMjA2ZWMzZTBiOTgwZDFlZmQ5ZTY2Y2Y2NjJiMTBmMGZlM2U3MDBlZGUyMTFiIn0.X6RcT5jaegTmjOYAxMoJpGBbtBRRsH3FQipquU1JiSk",
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

  // second chart dynamic

  const chart4 = () => {
    let chart1body = [
      {
        _id: "dashboard1516252235693",
        emailId: "candidate@sigmoid.com",
        orgViewReq: { organization: "DemoTest", view: "Auction" },
        chartObject: {
          metadata: {
            title: "chartobject:1516252235693",
            img_thumbnail: "../img/chart.png",
            chartType: "table",
            dataLimit: 50,
          },
          requestParam: {
            granularity: "hour",
            timeZone: { name: "UTC (+00:00)", location: "UTC" },
            dateRange: {
              startDate: newstartdate2.toString(),
              endDate: newenddate2.toString(),
            },
            xAxis: ["D017"],
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

    let requestOptions2 = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        "x-auth-token":
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyLXlMSVFIcTBIVTMzM2NRQk1oTVwvT2psZTlyeUp4cG1hSjJYaTNDNHp2T2dlSGk2QnhRUGRCSnRGVEErRFFqdVhHT2RJbUlvSkZHQk5iUjQzRGRFVnc3OHM2bUdMVkphNTFlcnoySnpnRlJBYzZuZz09IiwiaXNzIjoicmFodWxrdW1hciIsImV4cCI6MTYxMjY5Mjc2NSwiaWF0IjoxNjEyNjA2MzY1LCJqdGkiOiJjZjQzMDBhZTZkMmI2MGZiODY0ODY1N2JmYzIyMWU2Y2JkMjkyNzE2ZThiYTc4M2JlNDFmYTY4OGNhM2VkNjAwYjhlZjk2YWY5M2NjMzM2MWY0NGFjOTZjMzFkNzliMTMwY2E2YzI4OGJhMGRjYzczZDBkODliMmUxMDE3NmM2ZmQ5NjJjOWVjMjY2Yjg2NzE4ZTZiNGVkOGJmYjQ1N2NhMDQ5MzliYWJkNzc0YjY4M2U0M2M0ODBlOTU0MjU3NWQyYWNkODZhZWY5ZGVjNDY0YjgzMjA2ZWMzZTBiOTgwZDFlZmQ5ZTY2Y2Y2NjJiMTBmMGZlM2U3MDBlZGUyMTFiIn0.X6RcT5jaegTmjOYAxMoJpGBbtBRRsH3FQipquU1JiSk",
      },

      body: JSON.stringify(chart1body[0]),
    };

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

  // third chart dynamic

  const chart3 = () => {
    let chart1body = [
      {
        _id: "Datastory_ChartId_1535224664111",
        emailId: "candidate@sigmoid.com",
        orgViewReq: { organization: "DemoTest", view: "Auction" },
        chartObject: {
          metadata: {
            title: "",
            img_thumbnail: "images/pie.png",
            chartType: "pie",
            dataLimit: 500,
          },
          text: [],
          requestParam: {
            granularity: "hour",
            timeZone: { name: "UTC (+00:00)", location: "UTC" },
            dateRange: {
              startDate: newstartdate3.toString(),
              endDate: newenddate3.toString(),
            },
            xAxis: ["D005"],
            yAxis: [],
            approxCountDistinct: [],
            specialCalculation: ["CM001"],
            filter: [],
            orderBy: { customMetricOrdByList: [{ id: "CM001", desc: true }] },
            percentCalList: [{ id: "CM001" }],
          },
        },
      },
    ];

    let requestOptions3 = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        "x-auth-token":
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyLXlMSVFIcTBIVTMzM2NRQk1oTVwvT2psZTlyeUp4cG1hSjJYaTNDNHp2T2dlSGk2QnhRUGRCSnRGVEErRFFqdVhHT2RJbUlvSkZHQk5iUjQzRGRFVnc3OHM2bUdMVkphNTFlcnoySnpnRlJBYzZuZz09IiwiaXNzIjoicmFodWxrdW1hciIsImV4cCI6MTYxMjY5Mjc2NSwiaWF0IjoxNjEyNjA2MzY1LCJqdGkiOiJjZjQzMDBhZTZkMmI2MGZiODY0ODY1N2JmYzIyMWU2Y2JkMjkyNzE2ZThiYTc4M2JlNDFmYTY4OGNhM2VkNjAwYjhlZjk2YWY5M2NjMzM2MWY0NGFjOTZjMzFkNzliMTMwY2E2YzI4OGJhMGRjYzczZDBkODliMmUxMDE3NmM2ZmQ5NjJjOWVjMjY2Yjg2NzE4ZTZiNGVkOGJmYjQ1N2NhMDQ5MzliYWJkNzc0YjY4M2U0M2M0ODBlOTU0MjU3NWQyYWNkODZhZWY5ZGVjNDY0YjgzMjA2ZWMzZTBiOTgwZDFlZmQ5ZTY2Y2Y2NjJiMTBmMGZlM2U3MDBlZGUyMTFiIn0.X6RcT5jaegTmjOYAxMoJpGBbtBRRsH3FQipquU1JiSk",
      },

      body: JSON.stringify(chart1body[0]),
    };

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
    chart1();
    chart3();
    chart4();
  }, [
    newstartdate,
    newenddate,
    newstartdate2,
    newenddate2,
    newstartdate3,
    newenddate3,
  ]);

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
      setnewstartdate2(
        Math.floor(new Date(daterange.start._d).getTime() / 1000.0) * 1000
      );
      setnewenddate2(
        Math.floor(new Date(daterange.end._d).getTime() / 1000.0) * 1000
      );
      setnewstartdate3(
        Math.floor(new Date(daterange.start._d).getTime() / 1000.0) * 1000
      );
      setnewenddate3(
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
