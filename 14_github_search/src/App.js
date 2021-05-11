import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import Search from "./components/Search";
import List from "./components/List";

export default class App extends Component{
    state = {users:[], isLoading:false, isFirst:true, err:''}

    updateState = (state) =>{
        this.setState(state)
    }

    render(){
        return (
            <div className="container">
              <Search updateState={this.updateState}/>
              <List {...this.state}/>
            </div>
        )
    }
};
