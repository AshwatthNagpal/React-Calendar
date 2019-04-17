import * as actionTypes from "../actions/actionType.js";
let id = 0;

const initialState = {
  reminders: []
};

const addReminder = (prevState, action) => {
  const reminder = {
    id: ++id,
    time: action.reminder.time,
    discription: action.reminder.discription,
    color: action.reminder.color
  };

  return Object.assign({}, prevState, {
    reminders: [...prevState.reminders, reminder]
  });
};
const deleteReminder = (prevState, action) => {
  return {
    ...prevState,
    [action.date]: [...prevState[action.date]].filter(reminder => {
      return reminder.id !== action.id;
    })
  };
};

const reducer = (prevState = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_REMINDER:
      return addReminder(prevState, action);
    case actionTypes.DELETE_REMINDER:
      return deleteReminder(prevState, action);
    default:
      return prevState;
  }
};

export default reducer;
