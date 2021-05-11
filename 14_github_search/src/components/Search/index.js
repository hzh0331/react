import React, {Component} from "react";
import axios from "axios";

export default class Search extends Component{
    search = () =>{
        let {keywordElement:{value:keyword}} = this
        axios.get('/api1/search/users?q='+keyword).then(
            response=>{
                this.props.searchForUsers(response.data.items)
            },error=>{
                console.log(error)
            }
        )
    }
    render(){
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c => this.keywordElement = c} type="text" placeholder="enter the name you search"/>&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}