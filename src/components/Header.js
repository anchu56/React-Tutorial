import '../App.css';
function Header(props) {
    return(
        <div>
        <h1 className='headerstyle'>This is header component</h1>
        <h2> Hello I'm {props.data}</h2>
        </div>
        )
}

export default Header