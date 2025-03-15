import React, { useEffect, useReducer, useState } from 'react'

function reducer(currentState, action) {
  switch(action.type){
    case 'Increase By 1' :
      return {...currentState, 
        firstValue: currentState.firstValue + action.value
      } ;
    
    case 'Decrease By 1' :
      return {...currentState,
        firstValue: currentState.firstValue - action.value
      }

    case 'Reset' : 
        return {firstValue: 0}

    case 'Increase By 5' :
      return {...currentState, 
        firstValue: currentState.firstValue + action.value
      }

    case 'Decrease By 5' :
      return {...currentState, 
        firstValue: currentState.firstValue - action.value
      }
  } 
}


function PracticeKaro(){
const [count, dispatch] = useReducer(reducer, {firstValue: 0})

function handleDispatch(e){
  dispatch({
    type : e.target.innerText,
    value : +(e.target.value ),
  });

}
 
return(
 <div>
      <h3>{count.firstValue}</h3>
      <button onClick={handleDispatch} value={1}>Increase By 1 </button>
      <button onClick={handleDispatch} value={1}>Decrease By 1</button>
      <button onClick={handleDispatch} >Reset</button>
      <button onClick={handleDispatch} value={5}>Increase By 5 </button>
      <button onClick={handleDispatch} value={5}>Decrease By 5</button>
 </div>
)

}
export default PracticeKaro
