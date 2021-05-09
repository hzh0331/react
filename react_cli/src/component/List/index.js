import React, {Component} from 'react';
import "./index.css"
import "../Item"
import Item from "../Item";

class List extends Component {
    render() {
        let {todos, updateTodo} = this.props
        return (
            <ul className="todo-main">
                {todos.map(todo =>{
                        return <Item key={todo.id} {...todo} updateTodo={updateTodo}/>
                })}

            </ul>
        );
    }
}

export default List;