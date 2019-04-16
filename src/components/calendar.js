import React, { Component } from "react";
import dateFns from "date-fns";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { CalendarHeader } from "./CalendarHeader";
import { CalendarBody } from "./CalendarBody";

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMonth: new Date()
    };
    this.nextMonth = this.nextMonth.bind(this);
    this.prevMonth = this.prevMonth.bind(this);
    this.onDateClick = this.onDateClick.bind(this);
  }
  nextMonth() {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  }

  prevMonth() {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
  }
  renderDays() {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    return (
      <div style={styles.row}>
        {days.map(day => (
          <p style={styles.day}>{day}</p>
        ))}
      </div>
    );
  }

  onDateClick() {
    alert("date");
  }
  render() {
    return (
      <div>
        <CalendarHeader
          currentMonth={this.state.currentMonth}
          nextMonth={this.nextMonth}
          prevMonth={this.prevMonth}
        />
        {this.renderDays()}
        <CalendarBody
          currentMonth={this.state.currentMonth}
          onDateClick={this.onDateClick}
        />
      </div>
    );
  }
}

const styles = {
  day: {
    fontSize: "25px",
    fontWeight: "bold",
    margin: "25px",
    flexDirection: "row",
    color: "#4259f4"
  },
  row: {
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignContent: "center"
  }
};
