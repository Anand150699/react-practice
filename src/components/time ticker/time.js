import React, {useState} from 'react'
import './time.css'
import Button from '../../button';
function Time (){
    const [log, setLog] = useState(10)
    function timerHandle(){
       const logger = setInterval(()=>{
        setLog((prev)=>{
            if(prev!==0){
                return prev-1;
            }
            else{
                clearInterval(logger)
                return 10;
            }
        })
       },1000)
    }
    return(
        <div className='main'>
            <span className='timer-cont'>{log}</span>
            <Button btnText='Start timer' classes={log!==10? 'disabled':''} handleClick={timerHandle}/>
        </div>
    )
}

export default Time;