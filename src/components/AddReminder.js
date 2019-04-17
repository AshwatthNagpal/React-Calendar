import React, { Component } from "react";
import dateFns from "date-fns";
import * as actions from "../actions/actions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export class AddReminder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "green"
    };
    this.input = React.createRef();
    this.time = React.createRef();
  }

  getReminder() {
    return {
      time: this.time.current.value,
      decription: this.input.current.value,
      color: this.state.color
    };
  }
  render() {
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Reminder</DialogTitle>
          <DialogContent>
            <label>Description</label>
            <input
              autoFocus
              margin="dense"
              id="name"
              label="Reminder"
              fullWidth
              ref={this.input}
            />
            <label>Time</label>
            <input
              autoFocus
              margin="dense"
              id="name"
              label="Reminder"
              fullWidth
              ref={this.time}
            />
            <div style={{ flexDirection: "row", display: "flex" }}>
              <div onClick={() => this.setState({ color: "red" })}>
                <p style={{ color: "red", margin: "5px" }}>RED</p>
              </div>
              <div onClick={() => this.setState({ color: "green" })}>
                <p style={{ color: "green", margin: "5px" }}>Green</p>
              </div>
              <div onClick={() => this.setState({ color: "yellow" })}>
                <p style={{ color: "yellow", margin: "5px" }}>Yellow</p>
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.props.handleClose()} color="primary">
              Cancel
            </Button>
            <Button
              onClick={() => this.props.handleAdd(this.getReminder())}
              color="primary"
            >
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
