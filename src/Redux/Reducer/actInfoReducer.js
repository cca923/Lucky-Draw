import { SET_ACT_INFO } from "../type";

const initialState = {
  isCountdown: false,
  winner: "",
};

const actInfoReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ACT_INFO:
      const { isCountdown, winner = initialState.winner } = payload;

      return {
        ...state,
        isCountdown,
        winner,
      };

    default:
      return state;
  }
};

export default actInfoReducer;
