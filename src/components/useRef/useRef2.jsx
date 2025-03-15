import React, { useEffect, useRef, useState } from 'react'

function UseRef2() {

   const [timer, setTimer] = useState(0) ;
   const intervalRef = useRef(null) ;

   useEffect(()=>{
         intervalRef.current = setInterval(()=>{
            setTimer((prev)=>{
                return prev + 1 ;
            })
        }, 1000)

   }, [])
  return (
    <div>
        <h1>{timer}</h1>
        <button onClick={()=>clearInterval(intervalRef.current)}>Pause Timer</button>
    </div>
  )
}

export default UseRef2
