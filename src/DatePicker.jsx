// import React, { Component } from "react";
// import moment from "moment";
// import { DateRangePicker } from "react-dates";
// import "react-dates/lib/css/_datepicker.css";
// import "react-dates/initialize";
// export default class DatePicker extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
// startDate: null,
// endDate: null,
// visible: false,
//     };
//   }

//   startClick = () => {
//     alert(Date.UTC(this.state.startDate));
//   };

// componentDidMount() {
//   const requestOptions = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       accept: "application/json",
//       "x-auth-token":
//         "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyLWVQYnBBbHk2VDVEWWNGYjh4WWtOYmJ4ZExRMjV5eUVMeXdmaGpSYkJxOWFjeE5wRTVuR2FmMnI4ZGJ4N1lWOEVXZm1qbmNZTmZxN3pCbEp0RzArMnBSc1d0N1BoSDlPTjZyTVZUSitMMXlLT3V3PT0iLCJpc3MiOiJyYWh1bGt1bWFyIiwiZXhwIjoxNjExMzkwMTg5LCJpYXQiOjE2MTEzMDM3ODksImp0aSI6IjIzM2FiZThhYTE5ZThmZGI5MmE2OGY3MmQyZGMxZThkYWRhNDA1YmZkMjgwMTQ2MDhhMTQ1YWM4MjdkZjcyZTdkZDgxODdiZTM4NWQ2MjFiMjhjN2EwN2I3NWY0ZGU2NDg4ZjE4MjY4YjJkZjI0ZGI3MDhjMjVjZWZhM2I2ZmE0ZWIyNWM2MjdhZGQ0ODcxZDBkMGE2NTBlNzc2ZDljNzgzNTJkNzNlMmYxNmYxY2VmYjhhMzM3Y2Y1NTFiNDM2ZGU4NGRhNjNhNzJjMWJlY2VhNGY4MTE5MDZiZjg4YTNkMGE0MzAxN2NmMmZmZGFmOTE5YjE3ZjIyNjQxOWIyYjMifQ.UaYHdG4PEj9Y9KDMsMZFEvpy8s2TxtREzGiwrGL5GPs",
//     },

//     body: JSON.stringify({ organization: "DemoTest", view: "Auction" }),
//   };
//   fetch("https://sigviewauth.sigmoid.io/api/v1/getDateRange", requestOptions)
//     .then((response) => response.json())
//     .then((res) => {
//       console.log("date result", res.result.startDate);

//       this.setState({
//         startDate: Date.parse(new Date(res.result.startDate).toDateString()),
//         endDate: Date.parse(new Date(res.result.endDate).toDateString()),
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

//   endClick = () => {
//     alert(this.state.endDate);
//     // this.state.visible === true ? <NewChart startdate={Date.parse(this.state.startDate)} enddate={Date.parse(this.state.endDate)} /> : <> </>
//   };
//   handleLangChange = () => {
//     var date = {
//       startDate: Date.parse(this.state.startDate),
//       endDate: Date.parse(this.state.endDate),
//     };
//     this.props.onDate(date);
//   };
//   render() {
//     const today = moment();
//     const disableFutureDt = (current) => {
//       return current.isAfter(today);
//     };

//     // console.log(Date.parse(this.state.startDate))
//     // console.log(this.state.end)
//     return (
//       <div>
//         <DateRangePicker
//           startDate={this.state.startDate} // momentPropTypes.momentObj or null,
//           startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
//           endDate={this.state.endDate} // momentPropTypes.momentObj or null,
//           endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
//           onDatesChange={({ startDate, endDate }) =>
//             this.setState({ startDate, endDate })
//           } // PropTypes.func.isRequired,
//           focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
//           onFocusChange={(focusedInput) => this.setState({ focusedInput })} // PropTypes.func.isRequired,
//           isOutsideRange={(day) => {
//             let IsBlocked = false;
//             if (
//               moment().diff(day) < this.state.startDate ||
//               moment().diff(day) > this.state.endDate
//             ) {
//               IsBlocked = true;
//             }
//             return IsBlocked; // return true, if the current day is blocked;
//           }}
//         />
//         <br />
//         <br />
//       </div>
//     );
//   }
// }

import React from "react";
import DateRangePicker from "react-daterange-picker";
import "react-daterange-picker/dist/css/react-calendar.css";
import originalMoment from "moment";
import { extendMoment } from "moment-range";

const moment = extendMoment(originalMoment);

class Example extends React.Component {
  constructor(props, context) {
    super(props, context);

    const today = moment();

    this.state = {
      isOpen: false,
      value: moment.range(today.clone().subtract(7, "days"), today.clone()),
      startDate: null,
      endDate: null,
      visible: false,
    };
  }

  onSelect = (value, states) => {
    this.setState({ value, states });
  };

  onToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  renderSelectionValue = () => {
    return (
      <div>
        <div>Selection</div>
        {this.state.value.start.format("YYYY-MM-DD")} <br />
        {this.state.value.end.format("YYYY-MM-DD")}
      </div>
    );
  };

  componentDidMount() {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        "x-auth-token":
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyLWVQYnBBbHk2VDVEWWNGYjh4WWtOYmJ4ZExRMjV5eUVMeXdmaGpSYkJxOWFjeE5wRTVuR2FmMnI4ZGJ4N1lWOEVXZm1qbmNZTmZxN3pCbEp0RzArMnBSc1d0N1BoSDlPTjZyTVZUSitMMXlLT3V3PT0iLCJpc3MiOiJyYWh1bGt1bWFyIiwiZXhwIjoxNjExMzkwMTg5LCJpYXQiOjE2MTEzMDM3ODksImp0aSI6IjIzM2FiZThhYTE5ZThmZGI5MmE2OGY3MmQyZGMxZThkYWRhNDA1YmZkMjgwMTQ2MDhhMTQ1YWM4MjdkZjcyZTdkZDgxODdiZTM4NWQ2MjFiMjhjN2EwN2I3NWY0ZGU2NDg4ZjE4MjY4YjJkZjI0ZGI3MDhjMjVjZWZhM2I2ZmE0ZWIyNWM2MjdhZGQ0ODcxZDBkMGE2NTBlNzc2ZDljNzgzNTJkNzNlMmYxNmYxY2VmYjhhMzM3Y2Y1NTFiNDM2ZGU4NGRhNjNhNzJjMWJlY2VhNGY4MTE5MDZiZjg4YTNkMGE0MzAxN2NmMmZmZGFmOTE5YjE3ZjIyNjQxOWIyYjMifQ.UaYHdG4PEj9Y9KDMsMZFEvpy8s2TxtREzGiwrGL5GPs",
      },

      body: JSON.stringify({ organization: "DemoTest", view: "Auction" }),
    };
    fetch("https://sigviewauth.sigmoid.io/api/v1/getDateRange", requestOptions)
      .then((response) => response.json())
      .then((res) => {
        console.log("date result", res.result.startDate);

        this.setState({
          startDate: Date.parse(new Date(res.result.startDate).toDateString()),
          endDate: Date.parse(new Date(res.result.endDate).toDateString()),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div>{this.renderSelectionValue()}</div>

        <div>
          <input
            type="button"
            value="Toggle date picker"
            onClick={this.onToggle}
          />
        </div>

        {this.state.isOpen && (
          <DateRangePicker
            value={this.state.value}
            onSelect={this.onSelect}
            singleDateRange={true}
            minimumDate={this.state.startDate}
            maximumDate={this.state.endDate}
            initialYear={2017}
          />
        )}
      </div>
    );
  }
}

export default Example;

// import { DateRangePicker } from "rsuite";
// import { Button } from "rsuite";
// import "rsuite/lib/styles/index.less"; // or 'rsuite/dist/styles/rsuite-default.css'

// const {
//   allowedMaxDays,
//   allowedDays,
//   allowedRange,
//   beforeToday,
//   afterToday,
//   combine,
// } = DateRangePicker;

// const Demo = (props) => (
//   <div className="field">
//     <p>Disabled component.</p>
//     <DateRangePicker disabled />

//     <hr />
//     <p>Custom disabled.</p>
//     <DateRangePicker
//       disabledDate={(date) => dateFns.isAfter(date, new Date())}
//     />

//     <hr />
//     <p>Allow maximum selection for 7 days, other dates are disabled.</p>
//     <DateRangePicker disabledDate={allowedMaxDays(7)} />

//     <hr />
//     <p>Only 7 days allowed, other dates are disabled</p>
//     <DateRangePicker disabledDate={allowedDays(7)} />

//     <hr />
//     <p>Only one date range is allowed, other dates are disabled</p>
//     <DateRangePicker disabledDate={allowedRange("2018-12-01", "2019-10-01")} />

//     <hr />
//     <p>Disable dates before today</p>
//     <DateRangePicker disabledDate={beforeToday()} />

//     <hr />
//     <p>Disable dates after today</p>
//     <DateRangePicker disabledDate={afterToday()} />

//     <hr />
//     <p>
//       Combination: Allow maximum selection for 7 days, while disabling dates
//       before today, other dates are disabled
//     </p>
//     <DateRangePicker disabledDate={combine(allowedMaxDays(7), beforeToday())} />
//   </div>
// );

// export default Demo;
