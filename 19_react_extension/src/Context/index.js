import React, {Component} from 'react';


const MyContext = React.createContext()
const {Provider, Consumer} = MyContext
class A extends Component {
    state = {name:'tom', age:19}
    render() {
        const {name, age} = this.state
        return (
            <div>
                <h2>Component A</h2>
                <h2>userName: {this.state.name} age:{this.state.age}</h2>
                <Provider value={{name, age}}>
                    <B/>
                </Provider>
            </div>
        );
    }
}

class B extends Component {
    render() {
        return (
            <div>
                <h2>Component B</h2>
                <C/>
            </div>
        );
    }
}

class C extends Component {
    static contextType = MyContext
    render() {
        const {name, age} = this.context
        return (
            <div>
                <h2>Component C</h2>
                <h2>userName: {name} age:{age}</h2>
                <D/>
            </div>
        );
    }
}

function D(){
    return (
        <div>
            <h2>Component D</h2>
            <h2>userName:
                <Consumer>
                    {
                        value=>{
                            return value.name + " age:" + value.age
                            // return "age"
                        }
                    }
                </Consumer>
            </h2>
        </div>
    )
}

export default A;