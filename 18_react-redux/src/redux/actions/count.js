import {INCREASE, DECREASE} from "../const";

export const increase = data => ({type:INCREASE ,data})
export const decrease = data => ({type:DECREASE ,data})

export const asyncIncrease = (data, time) => {
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(increase(data))
        }, time)
    }
}