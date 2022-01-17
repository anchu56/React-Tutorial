import {useState} from 'react'
function App() {
  const[count,setCount] = useState(0)
  const addCount=()=>{
  setCount(count+1)
  console.log(count);
  }
  return (
    <div className="App" >
      <h1>Counter : {count}</h1>
      <button onClick={addCount}>Add</button>
    </div>
    );
}

export default App;



