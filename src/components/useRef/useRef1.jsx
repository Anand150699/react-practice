import React, { useRef } from 'react'

function useRef1() {
    const inputRef = useRef()
    function handleClick(){
        inputRef.current.focus()
    }
    
  return (
    <div>
      <input ref={inputRef}/>
      <button onClick={handleClick}>Focus</button>
    </div>
  )
}

export default useRef1

