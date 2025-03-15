import React, { useContext } from 'react'
import { myCont } from './comCenter';

function CompD () {
    function handleClick (){
        got.setState("khandelwal")
    }
    const got = useContext(myCont)
    return (
        <div>
            <div>{got.count}</div>
            <button onClick={()=>{got.dispatch('increase')}}>Incresae</button>
            <button onClick={()=>{got.dispatch('deccrease')}}>Decresae</button>
            <button onClick={()=>{got.dispatch('resete')}}>Resete</button>
        </div>
    )
}

export default CompD;