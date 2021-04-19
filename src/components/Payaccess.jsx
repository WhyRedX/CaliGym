import React from 'react'

function Payaccess(props) {
    return (
        <div className="p-box">
        <div class="p-icon">
            <img src={} alt=""/>
        </div>
            <div className="p-text">
                <h6>{props.step}</h6>
                <h4>{props.text}</h4>
                <p>{props.paragraph}</p>
            </div>
    </div>
    )
}

export default Payaccess
