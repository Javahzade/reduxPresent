import { combineReducers, createStore } from "redux";
import {reducerFirst, reducerSecond} from './';
import counterSlice from './toolkits';

export const store = createStore(combineReducers({reducerFirst, reducerSecond, counterSlice}));