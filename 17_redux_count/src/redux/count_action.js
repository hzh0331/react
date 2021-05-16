import {INCREASE, DECREASE} from "./const";

export const createIncreaseAction = data => ({type:INCREASE ,data})
export const createDecreaseAction = data => ({type:DECREASE ,data})