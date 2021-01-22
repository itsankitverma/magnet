import React, { Component } from "react";
import moment from "moment";
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController,
} from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";

export default class DatePicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: null,
      endDate: null,
    };
  }

  startClick = () => {
    alert(this.state.startDate);
  };

  endClick = () => {
    alert(this.state.endDate);
  };

  render() {
    const today = moment();
    const disableFutureDt = (current) => {
      return current.isAfter(today);
    };

    return (
      <div>
        <DateRangePicker
          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          endDate={this.state.endDate} // momentPropTypes.momentObj or null,
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          onDatesChange={({ startDate, endDate }) =>
            this.setState({ startDate, endDate })
          } // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={(focusedInput) => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          isValidDate={disableFutureDt}
        />
        <br />
        <br />
        {/* <button onClick={this.startClick}>start date</button>
        <button onClick={this.endClick}>end date</button> */}
      </div>
    );
  }
}
