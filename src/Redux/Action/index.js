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
