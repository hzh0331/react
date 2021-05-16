import logo from './logo.svg';
import './App.css';
import Count from "./containers/Count";
import React,{Component} from "react";
import Person from "./containers/Person";

export default class App extends Component {
  render() {
    return (
        <div>
            <Count/>
            <hr/>
            <Person/>
        </div>
    )
  }
}

