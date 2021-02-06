import React from "react";
// import DateRangePicker from "react-daterange-picker";
// import "react-daterange-picker/dist/css/react-calendar.css";
import originalMoment from "moment";
import DateRangePickerNew from "react-daterange-picker";
import "react-daterange-picker/dist/css/react-calendar.css";
import { extendMoment } from "moment-range";

const moment = extendMoment(originalMoment);

class Example extends React.Component {
  constructor(props, context) {
    super(props, context);

    const today = moment();

    this.state = {
      isOpen: false,
      // value: moment.range(today.clone().subtract(7, "days"), today.clone()),
      startDate: null,
      endDate: null,
      visible: false,
      value: "",
    };
  }

  onSelect = (value, states) => {
    this.setState({ value, states });
    this.props.selectDateRange(value);
  };

  onToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  componentDidUpdate(prevState) {
    if (prevState !== this.state) {
      this.props.initdate(this.state.startDate, this.state.endDate);
    }
  }
  renderSelectionValue = () => {
    return (
      <div>
        {/* <div>Selection</div> */}
        {/* {this.state.value.start.format("YYYY-MM-DD")} <br />
        {this.state.value.end.format("YYYY-MM-DD")} */}
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
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyLXBOUUdrN3ljWG45NmpDa1BEQmRoc00yVjhhVnlVZ1B1VFdhdW1PV2FLS01SNzU2YVREbzUxM1BPb2xPVTlCbndUN3pZQk9PZVBDN1c1RXl0VldIb0NRQkgzRHUyeHhUUmk0TGdCUnh3SnhOaHB3PT0iLCJpc3MiOiJyYWh1bGt1bWFyIiwiZXhwIjoxNjEyNjk0NDEyLCJpYXQiOjE2MTI2MDgwMTIsImp0aSI6IjI0ODFjODI4YjhkMGU4MWE0YWE3OGM0ZGFhNDZiZGU4MmRiZjZlZGQ5MjAxMmNiZDBmMGRmYzEwZjJlM2M1NGE3MzE2OTUxYzc4YTllNWMxZjFlMTgxZWM2NmE5YTA3ZDQ2MTNmMDBiMjQwZDg1M2VmNGY3ODU1NDdhZGZjZTc2ZTEwYTkwNzIyM2ZhNTllYmQyYTY1Y2EwZWFkYTliMzBiZGJjMzUzZGY2MzkxYTBmMzQzMzZmMWU2NmJmN2ZmMmMyMzM2OTJjNmMxNzRlN2ZhMmYyMzcyMzdhMzQwYjhmM2YxN2IwYjQyZDA0YzQ2YzliMTQ0MzRhYjAyOTQ3YWYifQ.1DVKkblfARo3AXXHTYBMoaxbopx1_egRADkBTQBEt8g",
      },

      body: JSON.stringify({ organization: "DemoTest", view: "Auction" }),
    };
    fetch("https://sigviewauth.sigmoid.io/api/v1/getDateRange", requestOptions)
      .then((response) => response.json())
      .then((res) => {
        console.log("date result", res.result.startDate);

        this.setState({
          startDate: moment(new Date(parseInt(res.result.startDate))),
          endDate: moment(new Date(parseInt(res.result.endDate))),
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

        {/* <div>
          <input
            type="button"
            value="Toggle date picker"
            onClick={this.onToggle}
          />
        </div> */}
        {this.state.startDate !== null ? (
          <DateRangePickerNew
            value={this.state.value}
            onSelect={this.onSelect}
            singleDateRange={false}
            minimumDate={this.state.startDate}
            maximumDate={this.state.endDate}
            initialDate={this.state.startDate._d.getDate()}
            initialMonth={this.state.startDate._d.getMonth()}
            initialYear={this.state.startDate._d.getFullYear()}
          />
        ) : (
          ""
        )}
        {/* {this.state.isOpen && (
          <DateRangePicker
            value={this.state.value}
            onSelect={this.onSelect}
            singleDateRange={true}
            minimumDate={this.state.startDate}
            maximumDate={this.state.endDate}
            initialYear={2017}
          />
        )} */}
      </div>
    );
  }
}

export default Example;
