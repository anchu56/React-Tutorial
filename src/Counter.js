import React,{useState,useEffect} from 'react'

function Counter() {
    const[count,setCount]=useState(0)
    useEffect(()=>{
        console.log("Mounting"); // works when new component is being loaded
        console.log("Updating " +count);
        return()=>{
            console.log("Clean up " +count); // If we give a state as array's argument then return is called first while updating.
        }

    },[count]) // The variable given in the array is - Whichever obj is updated using useState, for whom useEffect has to be called   
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <h1>Hello I am Component : {count} </h1>
        </div>
    )
}

export default Counter
