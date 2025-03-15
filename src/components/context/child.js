import React, { useContext } from 'react'
import { MyContext } from './centralStore';
//consumer
function Child (){
    const {message , setMessage} =  useContext(MyContext); // consuming the data 
  function changeText () {
    setMessage('Me change ho gya')
  }
  return(
  <div>
    <h2>I am NestedGrandChild ===: {message}</h2>
    <button onClick={changeText}>Change</button>
  </div>
    
  )
}

export default Child;