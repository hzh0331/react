import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import Search from "./components/Search";
import List from "./components/List";

export default class App extends Component{
    state = {users:[]}

    searchForUsers = (users) =>{
        this.setState({users})
    }

    render(){
        let {users} = this.state
        return (
            <div className="container">
              <Search searchForUsers={this.searchForUsers}/>
              <List users={users}/>
            </div>
        )
    }
};
