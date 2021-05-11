import React, {Component} from "react";
import axios from "axios";

export default class Search extends Component{
    updateState = () =>{
        console.log("aaa")
        this.props.updateState({isFirst:false, isLoading:true})
        let {keywordElement:{value:keyword}} = this
        axios.get('/api1/search/users?q='+keyword).then(
            response=>{
                this.props.updateState({users:response.data.items, isLoading:false})
            },error=>{
                this.props.updateState({err:error.message, isLoading:false})
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