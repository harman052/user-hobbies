import * as actionTypes from "./store/actions/actionTypes";

export interface Store {
  isHobbiesPanelActive: boolean;
  userList: user[];
  activeUserId: number;
  hobbyList: hobby[];
}

export interface user {
  userId: number;
  name: string;
}

export interface hobby {
  userId: number;
  passionLevel: string;
  hobbyName: string;
  year: string;
}

// action interfaces
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
  payload: user;
}

export interface AddHobby {
  type: actionTypes.ADD_HOBBY;
  payload: hobby;
}

export interface DeleteHobby {
  type: actionTypes.DELETE_HOBBY;
  payload: string;
}

export interface FetchUsers {
  type: actionTypes.FETCH_USERS;
  payload: user[];
}
export interface FetchHobbies {
  type: actionTypes.FETCH_HOBBIES;
  payload: hobby[];
}
