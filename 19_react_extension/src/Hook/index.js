import React from 'react';

function Hook(){
    const [count, setCount] = React.useState(0);
    const [name, setName] = React.useState('Tom');

    function add(){
        setCount(count=>  count+1)
    }

    function changeName(){
        setName(name => "Jerry")
    }


    return (
        <div>
            <h2>count:{count}</h2>
            <button onClick={add}>add</button>
            <br/>
            <h2>name:{name}</h2>
            <button onClick={changeName}>change name</button>
        </div>
    )

}

export default Hook;