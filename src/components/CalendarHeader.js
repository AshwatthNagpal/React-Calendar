import React, { Component } from "react";
import dateFns from "date-fns";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export class CalendarHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.header}>
        <div
          style={{ color: "#4259f4" }}
          onClick={() => this.props.prevMonth()}
        >
          <IoIosArrowBack />
        </div>
        <p style={styles.month}>
          {dateFns.format(this.props.currentMonth, "MMMM YYYY")}
        </p>
        <div
          style={{ color: "#4259f4" }}
          onClick={() => this.props.nextMonth()}
        >
          <IoIosArrowForward />
        </div>
      </div>
    );
  }
}

const styles = {
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  month: {
    width: "200px",
    marginLeft: "50px",
    marginRight: "50px",
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#4259f4"
  }
};
