import React from 'react'
import { NavLink } from 'react-router-dom'
import { headerConstants } from '../../constant'

function Rout () {
    
    return(
        <div>
            <ul>
               {
                headerConstants.map((ele, ind)=>{
                    return (
                        <li key={ind}>
                            <NavLink  to={ele.link}>{ele.pgName}</NavLink>
                        </li>
                    )
                })
               }
            </ul>
        </div>
    )
}

export default Rout