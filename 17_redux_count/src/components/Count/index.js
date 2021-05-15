import React, {Component} from 'react';

class Count extends Component {
    state = {
       count : 0
    }
    increase = () =>{
        let {count} = this.state
        let {value} = this.selectedValue
        this.setState({count:count+value*1})
    }

    decrease = () =>{
        let {count} = this.state
        let {value} = this.selectedValue
        this.setState({count:count-value*1})
    }

    increaseIfOdd = () =>{
        let {count} = this.state
        let {value} = this.selectedValue
        if(count % 2 !== 0)
            this.setState({count:count+value*1})
    }

    increaseAsync = () =>{
        let {count} = this.state
        let {value} = this.selectedValue
        setTimeout(() =>{
            this.setState({count:count+value*1})
        }, 500)
    }

    render() {
        return (
            <div>
                <h2>Count : {this.state.count}</h2>
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