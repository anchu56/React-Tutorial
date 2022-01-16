import './App.css'
import Header from './components/Header'
function App() {
  const data = 'description'
  const x = 'Navaneeth'
  return (
    <div>
      <Header data = {x} />
        <h1 style={{backgroundColor:'red'}} >Hello world</h1>
        <br/>
        <p style={{color:'violet'}} >This is a sample {data}</p>
        <TestName/>
        <TestName/>
        <TestName/>
    </div>
    );
}

export default App;



function TestName() {
 return(
  <h3 className='textcolor' >My Name is Ansaf</h3>
 )
}