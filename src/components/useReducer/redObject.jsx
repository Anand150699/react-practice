import React, { act, useReducer } from 'react'

const initialState = {
    fisrtCount : 0 
} ;

function reducer (currentState, action) {
    switch (action.type) {
        case  'increseOne' : 
            return {...currentState, fisrtCount: currentState.fisrtCount+action.value};
        case 'decreaseOne': 
            return  {...currentState, fisrtCount: currentState.fisrtCount-action.value}
        case 'reset' :
            return initialState ;
        case 'in5' :
            return {...currentState, fisrtCount: currentState.fisrtCount+action.value}
        case 'de5' :
            return {...currentState, fisrtCount: currentState.fisrtCount-action.value}
    }
}
function RedObject () {
    const [count, dispatch] = useReducer (reducer, initialState)
    function  handleReset(){
        dispatch({type: 'reset'})
    }
    return (
        <div>
            <div>{count.fisrtCount}</div>
            <button onClick={()=> dispatch({type:'increseOne', value: 1})}>Increase 1</button>
            <button onClick={()=>dispatch({type: 'decreaseOne', value: 1})}>Decrease 1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={()=>dispatch({type:'in5', value:5})}>Increase 5</button>
            <button onClick={()=>dispatch({type: 'de5', value: 5})}>Decrease 5</button>
        </div>
    )
}

export default RedObject