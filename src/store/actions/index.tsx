import * as actionTypes from "./actionTypes";
import { hobbies } from "../../types/index";

//define action interfaces
export interface ActivateHobbiesPanel {
  type: actionTypes.ACTIVATE_HOBBIES_PANEL;
  payload: boolean;
}

export interface SetActiveUserId {
  type: actionTypes.SET_ACTIVE_USER_ID;
  payload: number;
}

export interface AddUser {
  type: actionTypes.ADD_USER;
  payload: string;
}

export interface AddHobby {
  type: actionTypes.ADD_HOBBY;
  payload: hobbies;
}

export interface DeleteHobby {
  type: actionTypes.DELETE_HOBBY;
  payload: string;
}

//define actions
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

export const addUser = (newUser: string): AddUser => ({
  type: actionTypes.ADD_USER,
  payload: newUser
});

export const addHobby = (hobby: hobbies): AddHobby => ({
  type: actionTypes.ADD_HOBBY,
  payload: hobby
});

export const deleteHobby = (hobbyName: string): DeleteHobby => ({
  type: actionTypes.DELETE_HOBBY,
  payload: hobbyName
});
