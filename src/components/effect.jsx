import React, { useEffect, useState } from 'react'

function Effect () {
    const [state, setState] = useState(0)
    useEffect(()=>{
      setState(state+1)
    },[])
    return(
        <div>
            <h1>{state}</h1>
        </div>
    )
}

export default Effect;