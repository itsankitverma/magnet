import React, { Component } from "react";
import Moment from "moment";
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
    const isOutsideRange = (day) => {
      let dayIsBlocked = false;
      //Block future dates
      if (Moment().diff(day, "days") < this.state.endDate) {
        dayIsBlocked = false;
      }

      //Block days from 1 year ago
      if (Moment().diff(day, "years") > 0) {
        dayIsBlocked = false;
      }

      return dayIsBlocked;
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
          showDefaultInputIcon
          autoFocus
        />
        <br />
        <br />
        <button onClick={this.startClick}>start date</button>
        <button onClick={this.endClick}>end date</button>
      </div>
    );
  }
}
