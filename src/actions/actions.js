import * as actionTypes from "./actionType";

export const addReminderAction = reminder => {
  return {
    type: actionTypes.ADD_REMINDER,
    reminder
  };
};
export const deleteReminderAction = id => {
  return {
    type: actionTypes.DELETE_REMINDER,
    id
  };
};
