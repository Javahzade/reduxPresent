import { ActionTypes } from "./actionTypes";

export const firstState = {
    count: 0,
    percent: 5,
    value: 20,
    equal: 100,
}
export const secondState = {
    data: {},
}

export const reducerFirst = (state = firstState, action) => {
    switch(action.type){
        case ActionTypes.SET_COUNT:
            return{
                ...state,
                count: state.count + action.payload,
            };
        case ActionTypes.SET_PERCENT:
            return{
                ...state,
                percent: state.percent * action.payload,
            };
        default:
         return state;
    };
};
export const reducerSecond = (state = secondState, action) => {
    switch(action.type){
        case ActionTypes.SET_DATA:
            return{
                ...state,
                count: action.payload,
            };
        default:
         return state;
    };
};
