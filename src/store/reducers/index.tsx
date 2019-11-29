import { combineReducers } from "redux";
import isHobbiesPanelActive from "./isHobbiesPanelActive";
import userList from "./userList";
import hobbyList from "./hobbyList";
import activeUserId from "./activeUserId";

export default combineReducers({
  isHobbiesPanelActive,
  userList,
  activeUserId,
  hobbyList
});
