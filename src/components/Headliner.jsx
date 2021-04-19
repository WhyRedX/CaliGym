import React from 'react'

function Headliner(props) {
    return (
        <div id="headliner">
            <h1>{props.headline1}<span>{props.headline2}</span></h1>
        </div>
    )
}

export default Headliner 
