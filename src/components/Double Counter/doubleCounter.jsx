import { useState } from "react"
function DoubleCounter () {
    const [cntA, setCntA] = useState(0);
    const [cntB, setCntB] = useState(0)
    function handleA(){
        setCntA((prev)=>{
            return prev+1
        })
    }
    function hadleB(){
        setCntB(cntB+1)
    }
    return (
        <div>
            <button onClick={handleA}>Increase A</button>
            <div>{cntA}</div>
            <button onClick={hadleB}>Increase B</button>
            <div>{cntB}</div>
        </div>
    )
}

export default DoubleCounter;