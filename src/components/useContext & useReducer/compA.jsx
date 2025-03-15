import React, { useReducer, useState } from 'react'
import { myCont } from './comCenter';
import CompB from './compB';
import CompC from './compC';
import CompD from './compD';

const initialState = 0;
function reducer(currentValue, action) {
    switch(action){
        case 'increase' :
            return currentValue+1 ;
        case 'deccrease' :
            return currentValue-1 ;
        case 'resete' :
            return initialState ;
        default :
            return currentValue ;

    }
}


function CompA () {
    const [count, dispatch] = useReducer(reducer, initialState);
    const value = {count, dispatch}
    return (
        <div>
            <myCont.Provider value={value}>
            <div>{count}</div>
            <button onClick={()=>dispatch('increase')}>Incresae</button>
            <button onClick={()=>dispatch('deccrease')}>Decresae</button>
            <button onClick={()=>dispatch('resete')}>Resete</button>
                <CompB/>
                <CompC/>
                <CompD/>
            </myCont.Provider>
        </div>  
    )
}

export default CompA;