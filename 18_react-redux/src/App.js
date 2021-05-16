import store from "./redux/store";

import logo from './logo.svg';
import './App.css';
import Count from "./containers/Count";
import React,{Component} from "react";

export default class App extends Component {
  render() {
    return (
        <div>
          <Count store={store}/>
        </div>
    )
  }
}

