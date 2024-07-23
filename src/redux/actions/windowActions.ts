import { Action } from "@reduxjs/toolkit";
import { ReduxWindowAction } from "../../../types/enums";

export const toggleBriefAboutWindow = (): Action => {
    return {
        type: ReduxWindowAction.TOGGLE_BRIEF_ABOUT_WINDOW
    };
};

export const toggleExtenciveAboutWindow = (): Action => {
    return {
        type: ReduxWindowAction.TOGGLE_EXTENSIVE_ABOUT_WINDOW
    };
};
