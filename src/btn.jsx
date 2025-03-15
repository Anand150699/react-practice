import React from 'react'
import './btn.css'
function Btn(props) {
   const  {btnText, handleClick,classes} = props ;
  return (
    <div>
        <button className={`btnNew ${classes}`} onClick={handleClick}>{btnText?btnText:'Submit'}</button>
    </div>
  )
}

export default Btn ;
