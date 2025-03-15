import React, { useEffect } from 'react';
import './button.css'
function Button (props) {
    
    const {btnText, handleClick,classes} = props;
    
    return(
        <button className={`btn ${classes}`}  onClick={handleClick}>{btnText}</button>
    )
}

export default Button;