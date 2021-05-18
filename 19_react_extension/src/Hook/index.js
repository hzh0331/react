import React from 'react';
import ReactDOM from 'react-dom'

function Hook(){
    const [count, setCount] = React.useState(0);
    const [name, setName] = React.useState('Tom');
    const myRef = React.useRef()

    function show(){
        alert(myRef.current.value)
    }


    React.useEffect(() =>{
        let timer = setInterval(()=>{
            setCount(count=>count+1)
        },1000)
        return ()=> clearInterval(timer)
    },[])

    function add(){
        setCount(count=>  count+1)
    }

    function changeName(){
        setName(name => "Jerry")
    }

    function unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }


    return (
        <div>
            <h2>count:{count}</h2>
            <button onClick={add}>add</button>
            <br/>
            <h2>name:{name}</h2>
            <button onClick={changeName}>change name</button>
            <button onClick={unmount}>unmount</button>
            <input ref={myRef}/>
            <button onClick={show}>view input</button>
        </div>
    )

}

export default Hook;