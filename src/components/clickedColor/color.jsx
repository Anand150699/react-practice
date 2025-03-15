import React, {useState} from 'react'
import './color.css'
import Btn from '../../btn'
function Color () {
     
    const [colors, setColors] = useState({
        outer1: '',
        outer2: '',
        inner1 :'',
        inner2: ''
      })
      const [hide, setHide] = useState({
        outer1: true,
        outer2: true,
        inner1 : true,
        inner2: true
      })
      
      function handleClick(e){
        const cName = e.target.className;
        if(cName==='bahar1'){
          setColors({...colors, outer1:'bg-blue'})
        }
        if(cName==='bahar2'){
          setColors({...colors, outer2:'bg-orange'})
        }
        if(cName==='andar1'){
          setColors({...colors, inner1:'bg-red'})
        }
        if(cName==='andar2'){
          setColors({...colors, inner2:'bg-green'})
        }
      }
      
      function handleSwapOuter(){
        if(!colors.outer1 && !colors.outer2){
          return
        }else{
        const temp = colors.outer1 ;
        colors.outer1= colors.outer2;
        colors.outer2=temp
        setColors({...colors})}
      }
      function handleSwapInner(){
        const temp = colors.inner1 ;
        colors.inner1= colors.inner2;
        colors.inner2=temp
        setColors({...colors})
      }
      function hideInner(e){
        const hideEle = e.target.innerText ;
        if(hideEle==='Hide inner2'){
          setHide({...hide, inner2:false})
        }
        if(hideEle==='Hide inner1'){
          setHide({...hide, inner1:false})
        }
        if(hideEle==='Hide outer2'){
          setHide({...hide, outer2:false})
        }
        if(hideEle==='Hide outer1'){
          setHide({...hide, outer1:false})
        }
      }
      function resetClick(){
        setColors({
          outer1: '',
          outer2: '',
          inner1 :'',
          inner2: ''
        });
        setHide({
          outer1: true,
          outer2: true,
          inner1 : true,
          inner2: true
        })
      }
      
      return (
        <div className='div-main'>
         <div className='mainer' onClick={handleClick}>
              {hide.outer1?<div className='bahar1'id={colors.outer1}>
                {hide.outer2?<div className='bahar2' id={colors.outer2}>
                  {hide.inner1?<div className='andar1'id={colors.inner1}>
                   { hide.inner2?<div className='andar2'id={colors.inner2}>
      
                    </div>: null}
                  </div>:null}
                </div>:null}
              </div>:null}
          </div>
          <div>
                <button onClick={handleSwapOuter}>Swap Outer </button>
                <button onClick={handleSwapInner}>Swap inner </button>
                <button onClick={hideInner}>Hide inner2</button>
                <button onClick={hideInner}>Hide inner1</button>
                <button onClick={hideInner}>Hide outer2</button>
                <button onClick={hideInner}>Hide outer1</button>
          </div>
          <Btn btnText={'Reset'} handleClick={resetClick}/>
        </div>
      )
}

export default Color