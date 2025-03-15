import React, { useReducer } from 'react'

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


function Red () {
    const [count, dispatch] = useReducer(reducer, initialState)
    return(
        <div>
            <div>{count}</div>
            <button onClick={()=>dispatch('increase')}>Incresae</button>
            <button onClick={()=>dispatch('deccrease')}>Decresae</button>
            <button onClick={()=>dispatch('resete')}>Resete</button>
        </div>
    )
}
 export default Red