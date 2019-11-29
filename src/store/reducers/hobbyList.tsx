import { AddHobby, DeleteHobby, FetchHobbies, hobby } from "../../types";
import * as actionTypes from "../actions/actionTypes";
import messages from "../../config/messages";

const hobbyList = (
  state: hobby[] = [],
  action: AddHobby | DeleteHobby | FetchHobbies
): hobby[] => {
  switch (action.type) {
    case actionTypes.ADD_HOBBY: {
      return [...state, action.payload];
    }
    case actionTypes.FETCH_HOBBIES: {
      return [...action.payload];
    }
    case actionTypes.DELETE_HOBBY: {
      const userConfirmation = window.confirm(messages.userConfirmation);
      if (!userConfirmation) {
        return state;
      }
      let stateTemp = state;
      const index = stateTemp.findIndex(
        hobby => hobby.hobbyName === action.payload
      );
      stateTemp.splice(index, 1);
      return [...stateTemp];
    }
    default: {
      return state;
    }
  }
};

export default hobbyList;
