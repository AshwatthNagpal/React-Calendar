import React, { Component } from "react";
import dateFns from "date-fns";
import * as actions from "../actions/actions";
import { connect } from "react-redux";
import { CalendarHeader } from "./CalendarHeader";
import { CalendarBody } from "./CalendarBody";
import { AddReminder } from "./AddReminder";
import { stat } from "fs";
class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMonth: new Date(),
      open: false,
    };
    this.nextMonth = this.nextMonth.bind(this);
    this.prevMonth = this.prevMonth.bind(this);
    this.onDateClick = this.onDateClick.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleClose = this.handleClose.bind(this);
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

  onDateClick() {
    this.setState({ open: true });
  }

  handleAdd = reminder => {
    this.setState({ open: false });
    this.props.addReminder(reminder);
  };

  handleClose = () => {
    this.setState({ open: false });
  };

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

  render() {
    return (
      <div>
        <AddReminder
          open={this.state.open}
          handleAdd={(text, color) => this.handleAdd(text, color)}
          handleClose={this.handleClose}
        />
        <CalendarHeader
          currentMonth={this.state.currentMonth}
          nextMonth={this.nextMonth}
          prevMonth={this.prevMonth}
        />
        {this.renderDays()}
        <CalendarBody
          currentMonth={this.state.currentMonth}
          onDateClick={this.onDateClick}
          reminder={this.props.reminders}
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

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  addReminder: reminder => dispatch(actions.addReminderAction(reminder))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);
