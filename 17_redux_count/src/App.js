import logo from './logo.svg';
import './App.css';
import Count from "./components/Count";
import React,{Component} from "react";

export default class App extends Component {
  render() {
    return (
        <div>
          <Count/>
        </div>
    )
  }
}

