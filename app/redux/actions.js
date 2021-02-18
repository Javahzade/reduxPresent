import { ActionTypes } from "./actionTypes";

export const setCountAction = (payload) => {
    return {
        type: ActionTypes.SET_COUNT,
        payload,
    };
};
export const setPercentAction = (payload) => {
    return {
        type: ActionTypes.SET_PERCENT,
        payload,
    };
};