import React, {Component} from 'react';
import "./index.css"

class Footer extends Component {
    handleChangeAll = (event) =>{
        let {handleChangeAll} = this.props
        handleChangeAll(event.target.checked)
    }

    clearAllFinished = ()=>{
        let {clearAllFinished} = this.props
        clearAllFinished()
    }

    render() {
        let {todos, handleChangeAll, clearAllFinished} = this.props
        let finish = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
        let total = todos.length
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={(total === finish) && total !== 0} onChange={this.handleChangeAll}/>
                </label>
                <span>
                    <span>finished {finish}</span> / total {total}
                </span>
                <button className="btn btn-danger" onClick={this.clearAllFinished}>clear finished todo</button>
            </div>
        );
    }
}

export default Footer;