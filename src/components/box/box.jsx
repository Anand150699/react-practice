import React, { useEffect } from 'react'
 function Box (props) {
    const {classes, boxName } = props
   
    useEffect(()=>{
        return ()=>{
            console.log(boxName,"unmounted")
        }
    },[])
    return(
        <div>   
            <div className={classes}>{boxName}</div>
        </div>
    )
 }

 export default Box;