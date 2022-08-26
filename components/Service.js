import React from 'react'
import services from '../data/services'

function Service(props) {
    return (
        <li>
            <h3>{props.title}</h3>
            {props.description && <p>{props.description}</p>}
            <ul>
                {props.children}
            </ul>
        </li>
    )
}

export default Service

