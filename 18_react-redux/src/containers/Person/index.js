import React, {Component} from 'react';
import {nanoid} from "nanoid";
import {connect} from "react-redux";
import {createAddPersonAction} from "../../redux/actions/person";

class Person extends Component {
    addPerson = () =>{
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = {id:nanoid(),name,age}
        this.props.addPerson(personObj)
        this.nameNode.value = ''
        this.ageNode.value = ''
    }

    render() {
        return (
            <div>
                <h2>Person Component, count : {this.props.count}</h2>
                <input ref={c => this.nameNode = c} placeholder="please input name"/>
                <input ref={c => this.ageNode = c} placeholder="please input age"/>
                <button onClick={this.addPerson}>add</button>
                <ul>
                    {
                        this.props.people.map((personObj)=>{
                            return (
                                <li key={personObj.id}>{personObj.name} {personObj.age}</li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({
        people:state.person,
        count:state.count
    }),
    {addPerson:createAddPersonAction}
)(Person);