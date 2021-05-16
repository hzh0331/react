import React, {Component} from 'react';
import {nanoid} from "nanoid";

class Person extends Component {
    addPerson = () =>{
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = {id:nanoid(),name,age}
        console.log(name + " " + age)
    }

    render() {
        return (
            <div>
                <h2>Person Component</h2>
                <input ref={c => this.nameNode = c} placeholder="please input name"/>
                <input ref={c => this.ageNode = c} placeholder="please input age"/>
                <button onClick={this.addPerson}>add</button>
                <ul>
                    <li>name age</li>
                    <li>name age</li>
                    <li>name age</li>
                </ul>
            </div>
        );
    }
}

export default Person;