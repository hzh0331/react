import React, {Component} from "react";
import PubSub from 'pubsub-js'
import axios from "axios";

export default class Search extends Component{
    updateState = () =>{
        PubSub.publish('update', {isFirst:false, isLoading:true})
        let {keywordElement:{value:keyword}} = this
        axios.get('/api1/search/users?q='+keyword).then(
            response=>{
                PubSub.publish('update', {users:response.data.items, isLoading:false})
            },error=>{
                PubSub.publish('update', {err:error.message, isLoading:false})
            }
        )
    }
    render(){
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c => this.keywordElement = c} type="text" placeholder="enter the name you search"/>&nbsp;
                    <button onClick={this.updateState}>Search</button>
                </div>
            </section>
        )
    }
}