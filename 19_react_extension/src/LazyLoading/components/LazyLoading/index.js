import React, {Component, lazy, Suspense} from 'react';
import Header from "../Header";
import MyNaviLink from "../MyNaviLink";
import {Redirect, Route, Switch} from "react-router-dom";
import Loading from "../Loading";

const Home = lazy(() => import('../../pages/Home'))
const About = lazy(() => import('../../pages/About'))

class LazyLoading extends Component {
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
                                <Suspense fallback={<Loading/>}>
                                    <Switch>
                                        <Route path="/about" component={About}/>
                                        <Route path="/home" component={Home}/>
                                        <Redirect to="/about"/>
                                    </Switch>
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LazyLoading;