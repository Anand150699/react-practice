import React, {useState} from 'react'

function Index (){
    const [cnt, setCnt] = useState(5)
    function handleOTP(){
        let timer = setInterval(()=>{
            setCnt((prev)=>{
                if(prev===0){
                    clearInterval(timer);
                    return 5;
                }
                else{
                    return prev-1;
                }
            })
        },1000)
    }
    return (
        <div>
            <button onClick={handleOTP}>{cnt===5?'Send OTP': cnt}</button>
        </div>
    )
}

export default Index;