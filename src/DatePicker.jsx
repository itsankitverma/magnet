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
        <div>Selection</div>
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
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyLXBxbGJZcVFHNmp2dyszeVZvKzFlS3pJUWl1M00yOXVzM1JzdTZMQUpvMmZ5blEyXC9ES1VWVEVTXC9SanFYZ0cwYzRWRWt3UytDaU95bVR0T1EyTjdtSG5lSTZFek11OVVPTm5KTHdiV3FXU0djMXc9PSIsImlzcyI6InJhaHVsa3VtYXIiLCJleHAiOjE2MTE0NjkxNTMsImlhdCI6MTYxMTM4Mjc1MywianRpIjoiOWU5OWQ3ZGE3OTFhZTdmZDQ5NjdhYjU1ZDcyMWU5YmNkMjMxZWY1OTgyNGZiMjhjYWExOWVkYTNiMDdjMDRiYjU1N2NjMWFjMTRjODI4YTExZGM3YmU5YjhiNWQ2YzE0OThjNDFkNjFjNGUzZTEwYjYyYWM0Mjg0YzJmZDQ0ZWRmMWUwZGY5ODZkMTVhN2NjMTZlYmNlNzhhZmIxMzg4NTc4MzdmYzY5NzYwZjQ1M2ZmZmRkYTM3YWFlNjhhNTEzMmIyZmZmZTQxNGYzZGU0YTY3NWUwM2MyZjk1MmRlNGI5MDdjMmQzZmFiMDgxYTM5NjMyM2I1MWExOTQxN2I0NCJ9.LEVPpRP4XhlL2_Li-VIqETOK3YvyyFhleBBnqwK-X0Y",
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

        <div>
          <input
            type="button"
            value="Toggle date picker"
            onClick={this.onToggle}
          />
        </div>
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
