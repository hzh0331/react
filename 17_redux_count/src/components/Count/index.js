import React, {Component} from 'react';
import store from "../../redux/store";

class Count extends Component {
    increase = () =>{
        let {value} = this.selectedValue
        store.dispatch({type:"increase", data: value})
    }

    decrease = () =>{
        let {value} = this.selectedValue
        store.dispatch({type:"decrease", data: value})
    }

    increaseIfOdd = () =>{
        let count = store.getState()
        let {value} = this.selectedValue
        if(count % 2 !== 0)
            store.dispatch({type:"increase", data: value})
    }

    increaseAsync = () =>{
        let {value} = this.selectedValue
        setTimeout(() =>{
            store.dispatch({type:"increase", data: value})
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