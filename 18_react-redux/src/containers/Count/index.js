import {increase, decrease, asyncIncrease} from "../../redux/actions/count";

import {connect} from "react-redux";
import React, {Component} from "react";

class Count extends Component {
    increase = () =>{
        let {value} = this.selectedValue
        this.props.increase(value*1)
    }

    decrease = () =>{
        let {value} = this.selectedValue
        this.props.decrease(value*1)
    }

    increaseIfOdd = () =>{
        let count = this.props.count
        let {value} = this.selectedValue
        if(count % 2 !== 0)
            this.props.increase(value*1)
    }

    increaseAsync = () =>{
        let {value} = this.selectedValue
        this.props.asyncIncrease(value*1, 500)
        // setTimeout(() =>{
        //     store.dispatch(createIncreaseAsyncAction(value*1, 1000))
        // }, 500)
    }

    render() {
        return (
            <div>
                <h2>Count Component</h2>
                <h4>Count : {this.props.count}, people : {this.props.number}</h4>
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


export default connect(
    state => ({
        count:state.count,
        number:state.person.length
    }),
    {
        increase,
        decrease,
        asyncIncrease
    }
)(Count)