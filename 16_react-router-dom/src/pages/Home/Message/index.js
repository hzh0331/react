import React, {Component} from 'react';
import {Link, Route, Switch} from "react-router-dom";
import Detail from "./Detail";

class Message extends Component {
    state = {messageArr:[
            {id:'01', title:'message 1'},
            {id:'02', title:'message 2'},
            {id:'03', title:'message 3'},
        ]}

    render() {
        const {messageArr} = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map((message)=>{
                            let path = '/home/message/' + message.id + "/" + message.title
                            return (
                                <li key={message.id}>
                                    <Link to={path}>{message.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>
                <Route path="/home/message/:id/:title" component={Detail}/>
            </div>
        );
    }
}

export default Message;