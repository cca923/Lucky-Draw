const listReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_NAME":
      return [...state, action.payload];

    case "REMOVE_NAME":
      return state.filter((eachState) => {
        return eachState !== action.payload;
      });

    default:
      return state;
  }
};

export default listReducer;
