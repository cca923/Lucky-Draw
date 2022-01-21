export const addName = (name) => {
  return {
    type: "ADD_NAME",
    payload: name,
  };
};

export const removeName = (name) => {
  return {
    type: "REMOVE_NAME",
    payload: name,
  };
};

export const getTotalSeconds = (seconds) => {
  return {
    type: "GET_TOTAL_SECONDS",
    payload: seconds,
  };
};

export const countdown = (seconds) => {
  return {
    type: "COUNTDOWN",
    payload: seconds,
  };
};

export const changeTimerStatus = (status) => {
  return {
    type: "CHANGE_TIMER_STATUS",
    payload: status,
  };
};
