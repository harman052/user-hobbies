import { AddUser, FetchUsers, user } from "../../types";
import * as actionTypes from "../actions/actionTypes";

const userList = (state: user[] = [], action: AddUser | FetchUsers) => {
  switch (action.type) {
    case actionTypes.ADD_USER: {
      return [...state, action.payload];
    }
    case actionTypes.FETCH_USERS: {
      return [...action.payload];
    }
    default: {
      return state;
    }
  }
};

export default userList;
