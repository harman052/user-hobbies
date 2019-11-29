import * as actionTypes from "./actionTypes";
import {
  user,
  hobby,
  ActivateHobbiesPanel,
  AddUser,
  AddHobby,
  DeleteHobby,
  FetchUsers,
  FetchHobbies,
  SetActiveUserId
} from "../../types";

export const activateHobbiesPanel = (
  activationFlag: boolean
): ActivateHobbiesPanel => ({
  type: actionTypes.ACTIVATE_HOBBIES_PANEL,
  payload: activationFlag
});

export const setActiveUserId = (activeUserId: number): SetActiveUserId => ({
  type: actionTypes.SET_ACTIVE_USER_ID,
  payload: activeUserId
});

export const addUser = (newUser: user): AddUser => ({
  type: actionTypes.ADD_USER,
  payload: newUser
});

export const addHobby = (hobby: hobby): AddHobby => ({
  type: actionTypes.ADD_HOBBY,
  payload: hobby
});

export const deleteHobby = (hobbyName: string): DeleteHobby => ({
  type: actionTypes.DELETE_HOBBY,
  payload: hobbyName
});

export const fetchUsers = (userList: user[]): FetchUsers => ({
  type: actionTypes.FETCH_USERS,
  payload: userList
});

export const fetchHobbies = (hobbiesList: hobby[]): FetchHobbies => ({
  type: actionTypes.FETCH_HOBBIES,
  payload: hobbiesList
});
