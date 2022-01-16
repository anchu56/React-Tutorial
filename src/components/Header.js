import { Component } from 'react'
import '../App.css';
class Header extends Component {
    render(){
    return(
        <div>
        <h1 className='headerstyle'>This is header component</h1>
        <h2> Hello I'm {this.props.data}</h2>
        </div>
        )
    }
}

export default Header