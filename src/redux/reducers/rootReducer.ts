import { combineReducers } from "@reduxjs/toolkit";
import { WindowState, windowReducer } from "./windowReducer";
import { StackCarouselState, stackCarouselReducer } from "./stackCarouselReducer";

export interface ReduxState {
	windowStorage: WindowState;
	stackCarouselReducer: StackCarouselState;
}

const rootReducer = combineReducers({
	windowStorage: windowReducer,
	stackCarouselReducer: stackCarouselReducer
});

export default rootReducer;
