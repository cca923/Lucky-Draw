import { ADD_NAME, REMOVE_NAME, SET_ACT_INFO } from "./type";

export const addName = (payload) => {
  return {
    type: ADD_NAME,
    payload,
  };
};

export const removeName = (payload) => {
  return {
    type: REMOVE_NAME,
    payload,
  };
};

export const setActInfo = (payload) => {
  return {
    type: SET_ACT_INFO,
    payload,
  };
};
