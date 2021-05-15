const initState = 0
export default function counterReducer(preState = 0, action){
    const {type, data} = action
    switch (type){
        case "increase":
            return preState + data * 1;
        case "decrease":
            return preState + data * 1;
        default:
            return preState
    }
}