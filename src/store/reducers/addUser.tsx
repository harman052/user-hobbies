import { AddUser } from "../actions/index";
import * as actionTypes from "../actions/actionTypes";

const userList = (state: string[] = [], action: AddUser) => {
  switch (action.type) {
    case actionTypes.ADD_USER: {
      return [...state, action.payload];
    }
    default: {
      return state;
    }
  }
};

export default userList;
