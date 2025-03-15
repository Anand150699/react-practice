import { useEffect, useState } from "react"
import './practice.css'
import Button from "../../button";
import Box from "../box/box";
function Practice () {
    const [hide, setHide] = useState({first:true,
                            second:true,
                            third:true,
                            fourth:true,
                            fifth:true});

    function removeBox (name){
            setHide({...hide, first:false});

    }
    
    return(
        <div className="box-cont">
        <Button btnText="Remove First Box" handleClick={()=>removeBox("first")}/>
        {hide.first && <Box classes={"box bg-orange"} boxName={"FirstBox"}/>}
        <Box classes={"box bg-red"} boxName={"2ndBox"}/>
        <Box classes={"box bg-violet"} boxName={"3rdBox"}/>
        <Box classes={"box bg-purple"} boxName={"4thBox"}/>
        <Box classes={"box bg-yello"} boxName={"5thBox"}/>
        </div>
    
    )

}

export default Practice;