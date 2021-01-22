// import React, { useState } from "react";
import { Chart } from "react-google-charts";
import { Line } from "react-chartjs-2"
// import DatePicker from "./DatePicker";

// function Chart1() {

//   return (
//     <div>
//       <div>
//         <DatePicker />
//       </div>
// <Chart
//   width={"500px"}
//   height={"300px"}
//   chartType="Bar"
//   loader={<div>Loading Chart</div>}
//   data={[
//     ["Year", "Sales", "Expenses", "Profit"],
//     ["2014", 1000, 400, 200],
//     ["2015", 1170, 460, 250],
//     ["2016", 660, 1120, 300],
//     ["2017", 1030, 540, 350],
//   ]}
//   options={{
//     // Material design options
//     chart: {
//       title: "Company Performance",
//       subtitle: "Sales, Expenses, and Profit: 2014-2017",
//     },
//   }}
//   // For tests
//   rootProps={{ "data-testid": "2" }}
// />
//     </div>
//   );
// }

// export default Chart1;
import "./App.css";
import React, { useState } from "react";
import data1 from "./Data.json";
import t1data from "./json/Second.json";
import NewChart from "./NewChart";
import { Bar } from "react-chartjs-2";
import { Component } from "react";
import { LiveBarChart } from "react-dynamic-charts";
import "react-dynamic-charts/dist/index.css";

export default function Datafet() {
  const [publish, setpublish] = useState([]);
  const [ID, setID] = useState([]);

  const [imp, setimp] = useState([]);
  const [publisher, setpublisher] = useState([]);


  let a = [];

  let b = [];

  let c = [];
  let data = {
    datasets: [
      {
        barPercentage: 20.5,
        barThickness: 65,
        maxBarThickness: 20,
        minBarLength: 2,
        data: c,
        label: b,
      },
    ],
  };
  // function Trials() {
    let identity = [];
    let no = [];

  let url = "https://sigviewauth.sigmoid.io/api/v1/getData";

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

  fetch(url, requestOptions)
    .then((response) => response.json())
    // .then((datas) =>  setpublish({ datas }));
    .then((data) => {a.push(data.result.data)
    console.log(data)
    for (const dataObj of data.result.data) {
      identity.push(dataObj.publisherId)
      no.push(parseInt(dataObj.impressions_offered))
    }}
    );

    console.log("identity in chart 1",identity);
    console.log("no in chart 1", no);
  // console.log(a[0]);

  // setTimeout(() => {
  //   a[0].map((value) => {
  //     b.push(value.publisherId);
  //     c.push(parseInt(value.impressions_offered));
  //   });
  // }, 3000);

  // console.log("a in chart 1", a);

  // fetch(url,{
  //          method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //          "Accept":"application/json",
  //          "x-auth-token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyLUNnXC81eGRJM0lqanFBdWlCUjhsTDNTMlM5WUQxcmZJU1pcL0VWZXlmc1FZQXFMWHlQZ0lWbjc5N2plN2FkYUNZZ3VWREJ0bGhuMmZCUDZZZ29BZnBzWjRnb1llZElSek50cG92anR6azBpdmdQZHc9PSIsImlzcyI6InJhaHVsa3VtYXIiLCJleHAiOjE2MTEzMDMyNjMsImlhdCI6MTYxMTIxNjg2MywianRpIjoiMmI1MjY1YTc2MTkwOThjNmQxNmIxZmEwOTY2YjIzMzk2ZDk4ZmUyMzdjNzEyMTE4MWUwYzdlYzAxYzhjNjVmMzUyMzM3NTVlODUyYzZhOWMxODM2YjQzZTEzYmMzOTI4YTE1NmY0NGEzZWE1MjcwYzY4NjllNmIwOWI1Y2M3NTY0NGE4ODc3MmRkMWNmZTMzZTRmMjk1Y2NiNmRlMGZhMWIzMjI5OTM4NTgxNzljYmM5MzM4MGViNjgyNDU4NmFkMjBjMzYxM2IyMzFiYWE0MjljMGFhMTEyNjczZWM3NzYxOTFlOTRkM2FhNzRmZDhjMmQ3MWM3ZmNhNGNiMTc0MiJ9.uRbU-TNzmTJLbg3YVCZtAcELDpumw3yHtuvdNwU6utw",
  //         },
  //         body: JSON.stringify({ title: "Post Checker" }),
  //     }
  // }).then().then()
  // }

  // function Charts() {
  //   let x = [];
  //   let y = [];
  //   setTimeout(function () {
  //     console.log("here", a);
  //     a[0].map((value, index) => {
  //       x.push(value.publisherId);
  //       y.push(value.impressions_offered);
  //     });
  //     console.log("x", x);
  //   }, 3000);
  //   // chart1(a)
  // }

  // function chart1(a){

  // }

  // console.log(t1data.result.data[0].publisherId);

  // let MapPublis = [];

  // console.log(MapPublis);
  // let MapImp = [];
  // console.log(MapImp);
  // console.log(c);
  // // console.log(a);
  // console.log(b);
  
  // console.log("this is c", typeof c)
  return (
    <>
      <div className="chart1">
        <div className="c3">CHART 1</div>
        <Chart
          width={"700px"}
          height={"400px"}
          chartType="BarChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["publisherId", "impressions_offered"],
            [`${c.toString()}`, b],
          ]}
          options={{
            title: "Data Analytics Board",
            colors: ["#b0120a", "#ffab91"],
            hAxis: {
              title: "Impressions Offered",
              minValue: 100,
            },
            vAxis: {
              title: "Publisher Id",
            },
          }}
          // For tests
          rootProps={{ "data-testid": "4" }}
        />
        {/* {t1data.result.data.map((value, index) => {
          MapPublis.push(value.publisherId);
          MapImp.push(value.impressions_offered);
          return (
            <>
              <Chart
                width={"500px"}
                height={"300px"}
                chartType="BarChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ["publisherId", "impressions_offered"],
                  [value.publisherId, Number(value.impressions_offered)],
                ]}
                options={{
                  title: "Population of Largest U.S. Cities",
                  chartArea: { width: "50%" },
                  colors: ["#b0120a", "#ffab91"],
                  hAxis: {
                    title: "Total Population",
                    minValue: 0,
                  },
                  vAxis: {
                    title: "City",
                  },
                }}
                // For tests
                rootProps={{ "data-testid": "4" }}
              />
            </>
          );
        })} */}
        {/* <button
          name="submit"
          onClick={() => {
            // Trials();
            // Charts();
            setTimeout(() => {
              setpublish(true);
            }, 5000);
          }}
        >
          submit
        </button> */}
        <br />
        <div>
          {publish === true ? (
            <Bar
              data={data}
              width={1000}
              height={1500}
              options={{ maintainAspectRatio: false }}
            />
          ) : (
            <></>
          )}
        </div>
        {/* {
        setTimeout(() => {
         
          console.log(a)
        }, 5000)}{
        a.map((value, index) => {
          return(
            <> */}
        {/* {value.publisherId} */}
        {/* </>
          )
        })
        
        
       } */}
      </div>
    </>
  );
}
