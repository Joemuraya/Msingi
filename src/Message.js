import React from 'react'

function message(props) {
    return (
        <div>
            <h2>{props.username}: {props.text}</h2>
            
        </div>
    )
}

export default message
