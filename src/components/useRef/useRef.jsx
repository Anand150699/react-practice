import React, { useEffect, useRef } from 'react'

export default function UseRef() {

    const focusFirst = useRef(null);

    useEffect(()=>{
        /// focus input when component gets rendered initially
        focusFirst.current.focus()
    }, [])
    
  return (
    <div> 

      <input type='text' ref={focusFirst}/>

    </div>
  )
}
