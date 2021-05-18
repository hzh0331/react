import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import LazyLoading from "./LazyLoading/components/LazyLoading";


export default class App extends Component{
  render() {
    return (
        <LazyLoading/>
    )
  }
}
