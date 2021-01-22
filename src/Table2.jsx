import React, { useState } from "react";
import { Chart } from "react-google-charts";
import Second from "./json/tableChart.json";
import Buttons from "./Buttons";
function Chart1() {
  const [state, setstate] = useState({
    id: [],
    emailId: [],
    org: [],
    view: [],
    dataLimit: [],
    granularity: [],
    tzName: [],
    tzLoc: [],
    SdataRange: [],
    EdateRange: [],
    XAxis: [],
    YAxis: [],
  });

  function set() {
    // fetch("Table.json")
    //   .then(res => {
    //     if(res.ok){
    //       console.log("Successful");
    //     }
    //     else{
    //       console.log("Ünsuccessful");
    //     }
    //   })
    //   .then(result => console.log("result is : "+result))

    setstate({
      id: Second._id,
      emailId: Second.emailId,
      org: Second.orgViewReq.organization,
      view: Second.orgViewReq.view,
      dataLimit: Second.chartObject.metadata.dataLimit,
      granularity: Second.chartObject.requestParam.granularity,
      tzName: Second.chartObject.requestParam.timeZone.name,
      tzLoc: Second.chartObject.requestParam.timeZone.location,
      SdataRange: Second.chartObject.requestParam.dateRange.startDate,
      EdataRange: Second.chartObject.requestParam.dateRange.endDate,
      XAxis: Second.chartObject.requestParam.xAxis,
      YAxis: Second.chartObject.requestParam.yAxis,
    });
  }

  // console.log("Result is : ",First);

  return (
    <div className="table2">
      <Buttons
        onClick={() => {
          set();
        }}
      />
      <Chart
        width={"500px"}
        height={"300px"}
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["City", "2010 Population", "2000 Population"],
          ["New York City, NY", 8175000, 8008000],
          ["Los Angeles, CA", 3792000, 3694000],
          ["Chicago, IL", 2695000, 2896000],
          ["Houston, TX", 2099000, 1953000],
          ["Philadelphia, PA", 1526000, 1517000],
        ]}
        options={{
          title: "Population of Largest U.S. Cities",
          chartArea: { width: "50%" },
          hAxis: {
            title: "Total Population",
            minValue: 0,
          },
          vAxis: {
            title: "City",
          },
        }}
        // For tests
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
}

export default Chart1;
