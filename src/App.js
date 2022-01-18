import {useState} from 'react'
import Counter from './Counter';
import Employee from './Employee';
function App() {
  const[count,setCount] = useState(0)
  const addCount=()=>{
  setCount(count+1)
  console.log(count);
  }
 let emp = [{name:'Ansaf',age:21},
 {name:'Vasif',age:24},
 {name:'Asif',age:26},
 ]
  return (
    <div className="App" >
      <button onClick={addCount}>Add</button>
      <Counter title='1st Counter :' count={count} />
      <Counter title='2nd Counter :' count={count} />
       

    {
      emp.map((obj,index)=>{
        return(
          <Employee key={index} name={obj.name} age={obj.age}  />
        )
      })
    }
    </div>
    );
}

export default App;



