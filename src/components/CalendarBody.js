import React, { Component } from "react";
import dateFns from "date-fns";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export class CalendarBody extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let currentMonth = this.props.currentMonth;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, "D");
        days.push(
          <div
            style={
              dateFns.isSameDay(day, new Date())
                ? styles.selectedCell
                : styles.cell
            }
            key={day}
            onClick={() => this.props.onDateClick()}
          >
            <span
              style={
                dateFns.isSameMonth(day, monthStart)
                  ? styles.sameMonthNumber
                  : styles.diffMonthNumber
              }
            >
              {formattedDate}
            </span>
          </div>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div style={styles.row} key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div style={styles.columns}>{rows}</div>;
  }
}

const styles = {
  cell: {
    border: "1px solid black",
    width: "150px",
    height: "150px"
  },
  selectedCell: {
    border: "1px solid black",
    width: "150px",
    height: "150px",
    backgroundColor: "#b7b0b0"
  },
  row: {
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignContent: "center"
  },
  sameMonthNumber: {
    fontWeight: "bold",
    fontSize: "20px",
    margin: "15px",
    color: "#4259f4"
  },
  diffMonthNumber: {
    fontWeight: "bold",
    fontSize: "20px",
    margin: "15px",
    color: "#68696b"
  },
  columns: {
    margin: 10,
    padding: 10,
    flexWrap: "wrap",
    display: "flex"
  }
};
