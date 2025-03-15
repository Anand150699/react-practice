import React, { useState } from 'react'
import Button from '../../button'

function Counter (props) {
    const intCount = 0;
   const [count, setCount] = useState(0);
    return(
        <div>
            <button onClick={()=>setCount(count+1)}>Increse</button>
            <span>{count}</span>
            <button onClick = {()=>setCount(count-1)}>Decrease</button>
            <button onClick={()=>setCount(intCount)}>Reset</button>
        </div>
    )
}
export default Counter