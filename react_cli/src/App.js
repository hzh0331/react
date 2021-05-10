import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import Hello from "./component/Hello/Hello";
import Welcome from "./component/Welcome/Welcome";

import Item from "./component/Item"
import List from "./component/List"
import Footer from "./component/Footer"
import Header from "./component/Header"

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default class App extends Component{
    state = {todos:[
            {id:'001', name:'eat', done:true},
            {id:'002', name:'coding', done:true},
            {id:'003', name:'sleep', done:false}
        ]
    }

    addTodo = (todoObj)=>{
        let {todos} = this.state
        let newTodos = [todoObj, ...todos]
        this.setState({todos:newTodos})
    }

    updateTodo = (id, done) =>{
        let {todos} = this.state
        let newTodos = todos.map((todo)=>{
            if(todo.id === id) return {...todo, done}
            else return todo
        })
        this.setState({todos: newTodos})
    }

    deleteTodo = (id) =>{
        let {todos} = this.state
        let newTodos = todos.filter((todoObj) =>{
            return todoObj.id !== id
        })
        this.setState({todos: newTodos})
    }

    handleChangeAll = (done) =>{
        let {todos} = this.state
        let newTodos = todos.map((todo)=>{
            return {...todo, done}
        })
        this.setState({todos: newTodos})
    }

    clearAllFinished = () =>{
        let {todos} = this.state
        let newTodos = todos.filter((todo)=>{
            return !todo.done
        })
        this.setState({todos: newTodos})
    }

    render() {
        let {todos} = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List deleteTodo={this.deleteTodo} todos={todos} updateTodo={this.updateTodo}/>
                    <Footer todos={todos} handleChangeAll={this.handleChangeAll} clearAllFinished={this.clearAllFinished}/>
                </div>
            </div>
        )
    }
};
