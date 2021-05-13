import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import {Route, Redirect} from "react-router-dom";

import About from './pages/About'
import Home from './pages/Home'
import Header from "./components/Header";
import MyNaviLink from "./components/MyNaviLink";

export default class App extends Component{
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            <MyNaviLink to="/about">About</MyNaviLink>
                            <MyNaviLink to="/Home">Home</MyNaviLink>
                            {/*<a className="list-group-item active" href="./about.html">About</a>*/}
                            {/*<a className="list-group-item" href="./home.html">Home</a>*/}
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Route path="/about" component={About}/>
                                <Route path="/home" component={Home}/>
                                <Redirect to="/about"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
