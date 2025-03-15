import React, { useContext } from 'react'
import { myCont } from './comCenter';

function CompC () {
    const gotta = useContext(myCont)
    return (
        <div>
            <h1>{gotta.count}</h1>
            <button onClick={()=>{gotta.dispatch('increase')}}>Incresae</button>
        </div>
    )
}

export default CompC;