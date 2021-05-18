import React, {Component} from 'react';
import {Link, Route, Switch} from "react-router-dom";
import Detail from "./Detail";

class Message extends Component {
    state = {messageArr:[
            {id:'01', title:'message 1'},
            {id:'02', title:'message 2'},
            {id:'03', title:'message 3'},
        ]}

    replaceForward = (id, title)=>{
        this.props.history.replace('/home/message/detail/',{id: id, title:title})
    }

    pushForward = (id, title)=>{
        this.props.history.push('/home/message/detail/',{id: id, title:title})
    }

    forward = () =>{
        this.props.history.goForward()
    }

    back = () =>{
        this.props.history.goBack()
    }

    render() {
        const {messageArr} = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map((message)=>{
                            // let path = '/home/message/detail/' + message.id + "/" + message.title
                            return (
                                <li key={message.id}>
                                    {/*<Link to={path}>{message.title}</Link>*/}
                                    <Link to={{pathname:'/home/message/detail/', state:{id:message.id, title:message.title}}}>{message.title}</Link>
                                    &nbsp; <button onClick={() => this.pushForward(message.id, message.title)}>push</button>
                                    &nbsp; <button onClick={() => this.replaceForward(message.id, message.title)}>replace</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>
                {/*<Route path="/home/message/detail/:id/:title" component={Detail}/>*/}
                <Route path="/home/message/detail/" component={Detail}/>
                &nbsp; <button onClick={this.forward}>forward</button>
                &nbsp; <button onClick={this.back}>back</button>
            </div>
        );
    }
}

export default Message;