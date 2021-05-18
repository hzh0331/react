import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";

import MyNaviLink from "../../components/MyNaviLink";
import News from "./News";
import Message from "./Message";

class About extends Component {
    render() {
        return (
            <div>
                <h2>Home Content</h2>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <MyNaviLink to="/home/news">News</MyNaviLink>
                        </li>
                        <li>
                            <MyNaviLink to="/home/message">Message</MyNaviLink>
                        </li>
                    </ul>
                    <Switch>
                        <Route path="/home/news" component={News}/>
                        <Route path="/home/message" component={Message}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default About;