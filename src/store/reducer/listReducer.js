const initialState = {
  list: [],
};

const listReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_NAME":
      return {
        list: [...state.list, payload.name],
      };

    case "REMOVE_NAME":
      const list = state.list?.filter((data) => data !== payload.name);

      return {
        list,
      };

    default:
      return state;
  }
};

export default listReducer;
