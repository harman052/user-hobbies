import { AddHobby, DeleteHobby } from "../actions/index";
import { hobbies } from "../../types/index";
import * as actionTypes from "../actions/actionTypes";

const hobbyList = (
  state: hobbies[] = [],
  action: AddHobby | DeleteHobby
): hobbies[] => {
  switch (action.type) {
    case actionTypes.ADD_HOBBY: {
      return [...state, action.payload];
    }
    case actionTypes.DELETE_HOBBY: {
      const userConfirmation = window.confirm(
        "Are you sure you want to delete hobby?"
      );
      if (!userConfirmation) {
        return state;
      }
      let stateTemp = state;
      const index = stateTemp.findIndex(
        hobby => hobby.hobbyName === action.payload
      );
      if (index > -1) {
        stateTemp.splice(index, 1);
        return [...stateTemp];
      }
    }
    default: {
      return state;
    }
  }
};

export default hobbyList;
