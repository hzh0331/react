import count from "./count";
import person from "./person";
import {combineReducers} from "redux";

export const allReducers= combineReducers({
    count,
    person
})