const timerStatusReducer = (state = false, action) => {
  switch (action.type) {
    case "CHANGE_TIMER_STATUS":
      return action.payload;

    default:
      return state;
  }
};

export default timerStatusReducer;
