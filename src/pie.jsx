import React, { useState } from "react";
import { Chart } from "react-google-charts";
import Second from "./json/Second.json";
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
    //   .then((res) => {
    //     if (res.ok) {
    //       console.log("Successful");
    //     } else {
    //       console.log("Ünsuccessful");
    //     }
    //   })
    //   .then((result) => console.log("result is : " + result));

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
    <div style={{ marginLeft: 50 }}>
      <Buttons
        onClick={() => {
          set();
        }}
      />
      <div>
        <p>
          <b>Identity : </b>
          {state.id}
        </p>
        <p>
          <b>Email ID : </b>
          {state.emailId}
        </p>
        <p>
          <b>Organization : </b>
          {state.org}
        </p>
        <p>
          <b>View : </b>
          {state.view}
        </p>
        <p>
          <b>Start Date Range : </b>
          {state.SdataRange}
        </p>
        <p>
          <b>End Date Range : </b>
          {state.SdataRange}
        </p>
      </div>
      <Chart
        style={{ marginLeft: 150, marginTop: -250 }}
        width={"500px"}
        height={"300px"}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["Date Range", "Granularity (in Hour)"],
          ["Start Date Range", 200],
          ["End Date Range", state.SdataRange],
        ]}
        options={{
          legend: "none",
          pieSliceText: "label",
          title: "Activity Dashboard Details (100 degree rotation)",
          pieStartAngle: 100,
        }}
      />
    </div>
  );
}

export default Chart1;
