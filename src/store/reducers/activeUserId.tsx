import { SetActiveUserId } from "../../types";
import * as actionTypes from "../actions/actionTypes";

const activeUserId = (state: number = 0, action: SetActiveUserId) => {
  switch (action.type) {
    case actionTypes.SET_ACTIVE_USER_ID: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default activeUserId;
