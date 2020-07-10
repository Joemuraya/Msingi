import React from 'react'

function message(props) {
    return (
        <div>
            <h2>{props.text}</h2>
            {props.username}
        </div>
    )
}

export default message
