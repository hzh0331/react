import React, {Component} from 'react';
import store from "../../redux/store";
import {createIncreaseAction, createDecreaseAction, createIncreaseAsyncAction} from "../../redux/count_action";

class Count extends Component {
    increase = () =>{
        let {value} = this.selectedValue
        store.dispatch(createIncreaseAction(value*1))
    }

    decrease = () =>{
        let {value} = this.selectedValue
        store.dispatch(createDecreaseAction(value*1))
    }

    increaseIfOdd = () =>{
        let count = store.getState()
        let {value} = this.selectedValue
        if(count % 2 !== 0)
            store.dispatch(createIncreaseAction(value*1))
    }

    increaseAsync = () =>{
        let {value} = this.selectedValue
        setTimeout(() =>{
            store.dispatch(createIncreaseAsyncAction(value*1, 1000))
        }, 500)
    }

    render() {
        return (
            <div>
                <h2>Count : {store.getState()}</h2>
                <select ref={c => this.selectedValue = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                &nbsp;<button onClick={this.increase}>+</button>
                &nbsp;<button onClick={this.decrease}>-</button>
                &nbsp;<button onClick={this.increaseIfOdd}>increase if odd</button>
                &nbsp;<button onClick={this.increaseAsync}>increase async</button>
            </div>
        );
    }
}

export default Count;