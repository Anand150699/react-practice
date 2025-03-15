import React, { useReducer, useState } from 'react'

const initialState = {
    firstValue: 0 ,
}
function reduce(currentValue, action){
    switch (action.type) {
        case 'increse' : 
            return {...currentValue, firstValue: currentValue.firstValue+action.value} ;
        case 'decrease' : 
            return {...currentValue, firstValue: currentValue.firstValue-action.value} ;
        case 'reset' : 
            return initialState ;
    }
}

function ReducerPrac() {
  const [count, dispatch] = useReducer(reduce, initialState)
  return (
    <div>
      <h1>{count.firstValue}</h1>
      <button onClick={()=>dispatch({type:'increse', value:1})}>Increse 1</button>
      <button onClick={()=>dispatch({type:'decrease', value:1})}>Decrease 1</button>
      <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
      <button onClick={()=>dispatch({type:'increse', value:5})}>Increse 5</button>
      <button onClick={()=>dispatch({type:'decrease', value:5})}>Decrease 5</button>
    </div>
  )
}

export default ReducerPrac
