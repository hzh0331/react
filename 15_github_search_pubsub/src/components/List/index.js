import React, {Component} from "react";
import PubSub from 'pubsub-js'

import "./index.css";

export default class List extends Component{
    state = {users:[], isLoading:false, isFirst:true, err:''}

    componentDidMount() {
        this.token = PubSub.subscribe("update", (_,stateObj)=>{
            this.setState(stateObj)
        })
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.token)
    }

    render() {
        let {users, isFirst, isLoading, err} = this.state
        return (
            <div className="row">
                {
                    isFirst ? <h2>please input keyword and press search</h2> :
                        isLoading ? <h2>Loading</h2> :
                            err ? <h2>err</h2>:
                                users.map((userObj) =>{
                                    console.log(userObj)
                                    return (
                                        <div key={userObj.id} className="card">
                                            <a href={userObj.html_url} rel="noreferrer" target="_blank">
                                                <img alt="avatar" src={userObj.avatar_url} style={{width: '100px'}}/>
                                            </a>
                                            <p className="card-text">{userObj.login}</p>
                                        </div>
                        )
                    })
                }
            </div>
        )
    }
}