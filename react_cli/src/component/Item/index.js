import React, {Component} from 'react';
import "./index.css"

class Item extends Component {
    state = {mouse:false}

    handleMouse(flag){
        return ()=>{
            this.setState({ mouse: flag})
        }
    }

    handleChecked = (id)=>{
        return (event)=>{
            this.props.updateTodo(id, event.target.checked)
        }
    }

    deleteTodo = (id) =>{
        if(window.confirm('confirm to delete?')){
            this.props.deleteTodo(id)
        }
    }

    render() {
        let {mouse} = this.state
        let {id, name, done, deleteTodo} = this.props
        return (
            <li style={{backgroundColor : mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" defaultChecked={done} onChange={this.handleChecked(id)}/>
                    <span>{name}</span>
                </label>
                <button onClick={() => this.deleteTodo(id)} className="btn btn-danger" style={{display: mouse ? 'block' : 'none'}}>删除</button>
            </li>
        );
    }
}

export default Item;