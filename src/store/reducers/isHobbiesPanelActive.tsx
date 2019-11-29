import { ActivateHobbiesPanel } from "../actions/index";
import * as actionTypes from "../actions/actionTypes";

const isHobbiesPanelActive = (
  state: boolean = true,
  action: ActivateHobbiesPanel
) => {
  switch (action.type) {
    case actionTypes.ACTIVATE_HOBBIES_PANEL: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default isHobbiesPanelActive;
