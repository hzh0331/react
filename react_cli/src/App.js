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
  render() {
    return (
        // <div>
        //   <Hello/>
        //   <Welcome/>
        // </div>
        <div className="todo-container">
            <div className="todo-wrap">
                <Header/>
                <List/>
                <Footer/>
            </div>
        </div>
    )
  }
};
