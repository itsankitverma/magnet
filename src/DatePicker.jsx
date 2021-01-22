import React, { Component } from "react";
import moment from "moment";
import {
  DateRangePicker,
} from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";
export default class DatePicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: null,
      endDate: null,
      visible:false,
    };
  }

  startClick = () => {
    alert(Date.UTC(this.state.startDate));
  };

  endClick = () => {
    alert(this.state.endDate);
    // this.state.visible === true ? <NewChart startdate={Date.parse(this.state.startDate)} enddate={Date.parse(this.state.endDate)} /> : <> </>

  };
  handleLangChange = () => {
    var date = {
      startDate : Date.parse(this.state.startDate),
      endDate : Date.parse(this.state.endDate)

    };
    this.props.onDate(date);            
}
   render() {
    const today = moment();
    const disableFutureDt = (current) => {
      return current.isAfter(today);
    };

    // console.log(Date.parse(this.state.startDate))
    // console.log(this.state.end)
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
        />
        <br />
        <br />
        
      </div>
    );
  }
}
