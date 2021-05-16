import {ADD_PERSON} from "../const";
const initState = []
export default function personReducer(previousState = initState, action){
    const {type, data} = action
    switch (type) {
        case ADD_PERSON:
            return [data, ...previousState]
        default:
            return previousState
    }
}