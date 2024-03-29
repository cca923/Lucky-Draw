const totalSecondsReducer = (state = 0, action) => {
  switch (action.type) {
    case "GET_TOTAL_SECONDS":
      return action.payload;

    case "COUNTDOWN":
      return action.payload - 1;

    default:
      return state;
  }
};

export default totalSecondsReducer;
