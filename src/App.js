import Counter from "./Counter"
import {useState} from 'react'
import About from './Container/About'
import Profile from './Container/Profile'
function App() {
  const [state,setState]=useState('')
  let component
  if(state=='about')
  {component=<About/>}
  if(state=='profile')
  {component=<Profile/>}
return(
  <div className="App">
    <button onClick={()=>setState('about')}>About</button>
    <button onClick={()=>setState('profile')}>Profile</button>
   {component}
  
  </div>
);
}

export default App;
