import logo from './logo.svg';
import './App.css';
import React,{Component} from "react";
import axios from "axios";

export default class App extends Component {
  getStudentInfo = () =>{
      axios.get("http://localhost:3000/students").then(
          response=>{
              console.log(response.data)
          },fail=>{

          }
      )
  }

    getCarInfo = () =>{
        axios.get("http://localhost:3000/students").then(
            response=>{
                console.log(response.data)
            },fail=>{

            }
        )
    }
  render() {
    return (
        <div>
          <button onClick={this.getStudentInfo}>click for students' information</button>
            <button onClick={this.getCarInfo}>click for cars' information</button>
        </div>
    )
  }


}
