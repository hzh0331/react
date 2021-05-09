import React, {Component} from 'react';
import "./index.css"
import {nanoid} from 'nanoid'
import PropTypes from 'prop-types'

class Header extends Component {

    static propTypes = {
        addTodo : PropTypes.func.isRequired
    }

    handleKeyUp = (event)=>{
        let {keyCode, target} = event
        if(keyCode !== 13) return
        if(target.value.trim() === ''){
            alert("input can not be null")
            return;
        }
        let todoObj = {id: nanoid(), name:target.value, done:false}
        this.props.addTodo(todoObj)
        target.value = ''
    }

    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="please type your new todo, press enter button to confirm"/>
            </div>
        );
    }
}

export default Header;