import React, { useState } from 'react'
import Button from '../../button'

function Counter (props) {
    const intCount = 0;
   const [count, setCount] = useState(0);
   function handleClick(){
    setCount(count+1)
   }
    return(
        <div>
            <button onClick={handleClick}>Increse</button>
            <span>{count}</span>
            <button onClick = {()=>setCount(count-1)}>Decrease</button>
            <button onClick={()=>setCount(intCount)}>Reset</button>
        </div>
    )
}
export default Counter