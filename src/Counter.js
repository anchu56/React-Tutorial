import React,{useState,useEffect} from 'react'

function Counter() {
    const[count,setCount]=useState(0)
    const[count2,setCount2]=useState(0)
    useEffect(()=>{
        console.log("Mounting"); // works when new component is being loaded
        console.log("Count1 " +count);
        console.log("Count2 " +count2);
        

    },[count,count2]) // The variable given in the array is - Whichever obj is updated using useState, for whom useEffect has to be called   
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <h1>Hello I am Component 1 : {count} </h1>

            <button onClick={()=>setCount2(count2+1)}>Increment</button>
            <h1>Hello I am Component 2 : {count2} </h1>
        </div>
    )
}

export default Counter
