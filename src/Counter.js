import React,{useState,useEffect} from 'react'

function Counter() {
    const[count,setCount]=useState(0)
    useEffect(()=>{
        console.log("Mounting"); // works when new component is being loaded
        console.log("Updating " +count);
        

    },[count]) // The variable given in the array is - Whichever obj is updated using useState, for whom useEffect has to be called   
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <h1>Hello I am Component : {count} </h1>
        </div>
    )
}

export default Counter
