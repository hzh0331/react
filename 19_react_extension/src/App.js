import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import LazyLoading from "./LazyLoading/components/LazyLoading";
import Hook from "./Hook";
import A from './Context'


export default class App extends Component{
  render() {
    return (
        // <LazyLoading/>
        // <Hook/>
        <A/>
    )
  }
}
