import React, {useContext, useState} from 'react'
import Button from "../../button"
import './design.css'
import { AppContext } from '../UseReduceraAndUseContext'
function Design (){
    const {state, dispatch} = useContext(AppContext)
    const [initial, setInitial] = useState({
        backgroundColor:'',
        border:'',
        color:''
    })

    const [chosed, setChosed] = useState({
        bg:'',
        color:'',
        border:''
    })
    function handleBorder () {
        setInitial({...initial, border:chosed.border})
        dispatch({
            type:'Design',
           payload: {border: chosed.border}
        })
    }
    function handleBg () {
        setInitial({...initial, backgroundColor:chosed.bg})
        dispatch({
            type:'Design',
            payload: {backgroundColor: chosed.bg}
        })
    }
    function handleTextColor () {
        setInitial({...initial, color: chosed.color})
        dispatch({
            type:'Design',
            payload: {color: chosed.color}
        })
    }
    function inputBorder(e){
        let val = e.target.value;
        setChosed({...chosed, border:`5px solid ${val}`})
    }
    function inputBg(e){
        let val = e.target.value;
        setChosed({...chosed, bg:val})
    }
    function inputColor(e){
        let val = e.target.value;
        setChosed({...chosed, color:val})
    }
    return(
        <div className="main-div">
            <input type="text" placeholder="Add Border..." onChange={inputBorder}/>
            <Button btnText='Add Border' handleClick={handleBorder}/>
            <input type="text" placeholder="Add Background..." onChange={inputBg}/>
            <Button btnText='Add Background' handleClick={handleBg}/>
            <input type="text" placeholder="Add Text Color..." onChange={inputColor}/>
            <Button btnText='Add Text Color' handleClick={handleTextColor}/>
            <div className="box" style={initial}>
                    Hi I am udpated Box...
            </div>
        
        </div>
    )
}

export default Design