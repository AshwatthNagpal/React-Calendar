import React, { Component } from "react";
import dateFns from "date-fns";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.addMonth = 1;
    this.subMonth = -1;
    this.state = {
      currentMonth: new Date()
    };
  }

  changeMonth(value) {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, value)
    });
  }

  renderHeader() {
    return (
      <div style={styles.header}>
        <div onClick={() => this.changeMonth(this.subMonth)}>
          <IoIosArrowBack />
        </div>
        <p style={styles.month}>
          {dateFns.format(this.state.currentMonth, "MMMM YYYY")}
        </p>
        <div onClick={() => this.changeMonth(this.addMonth)}>
          <IoIosArrowForward />
        </div>
      </div>
    );
  }

  render() {
    return this.renderHeader();
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
    fontWeight: "bold"
  }
};
