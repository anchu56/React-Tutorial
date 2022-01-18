import React from 'react'

function Counter(props) {
    const {title,...obj} = props // props destructuring 
    return (
        <div>
            <h1>{title} {obj.count}</h1>
            <h2>{obj.place}</h2>
        </div>
    )
}

export default Counter
