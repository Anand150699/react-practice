import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

function SingleRoute () {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to={'/card'}>card</NavLink>
                </li>
                <li>
                    <NavLink to={'/time'}>Time</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default SingleRoute