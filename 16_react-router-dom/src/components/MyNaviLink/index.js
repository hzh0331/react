import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class MyNaviLink extends Component {
    render() {
        return (
            <NavLink activeClassName="demo" className="list-group-item" {...this.props}/>
        );
    }
}

export default MyNaviLink;