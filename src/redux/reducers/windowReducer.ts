import { Action } from "@reduxjs/toolkit";
import { ReduxWindowAction } from "../../../types/enums";

export interface WindowState {
	briefAboutWindowIsOpen: Boolean;
	extensiveAboutWindowIsOpen?: Boolean;
}

const initialState: WindowState = { 
	briefAboutWindowIsOpen: true,
	extensiveAboutWindowIsOpen: false
};

export const windowReducer = (state = initialState, action: Action): WindowState => {
    switch (action.type) {
		case ReduxWindowAction.TOGGLE_BRIEF_ABOUT_WINDOW: 
			return { 
				...state,
				briefAboutWindowIsOpen: !state.briefAboutWindowIsOpen,
			};
		
		case ReduxWindowAction.TOGGLE_EXTENSIVE_ABOUT_WINDOW: 
			return { 
				...state,
				extensiveAboutWindowIsOpen: !state.extensiveAboutWindowIsOpen
			};

		default: 
			return { 
				...state
			};
	}
};