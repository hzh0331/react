import {INCREASE, DECREASE} from "../const";

const initState = 0
export default function counterReducer(preState = initState, action){
    const {type, data} = action
    switch (type){
        case INCREASE:
            return preState + data;
        case DECREASE:
            return preState - data;
        default:
            return preState
    }
}