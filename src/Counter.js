import React,{useState,useEffect} from 'react'

function Counter() {
    useEffect(()=>{
        console.log("Mounting") // works when new component is being loaded
        return()=>{
            console.log("Unmounting") // return works when the component is being removed
        }
    },[]) // when we give an empty array as second argument then useEffect works only during mouning and unmounting , It doesnt work while updating
    const[count,setCount]=useState(0)
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <h1>Hello I am Component : {count} </h1>
        </div>
    )
}

export default Counter
