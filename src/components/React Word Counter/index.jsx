import React, { useState} from 'react'
import './index.css'

function WordCounter () {
    
    const [paragraph, setParagraph] = useState('');
    const [size, setSize] = useState(16);
    const [limit, setLimit] = useState(50);
    const [exceeded, setExceeded] = useState(false)
    function handleText (e){
        const val = countWords(e.target.value);
        if(val<=limit){
        setParagraph(e.target.value)
        }
        else{
           const s = e.target.value;
           const ss = s.split(" ").slice(0,limit).join(" ")
           setParagraph(ss)
           if(exceeded){
           setExceeded(false)}
           else{
            setExceeded(true)
           }
        }
       
    }
    function countWords(val){
            return val?.split(" ").length;
    }
    function handleSize (e){
        const bar  = e.target.value;
        setSize(bar)
    }
    function handleLimit (e){
        const lim = e.target.value;
        setLimit(lim)
       
    }
    return(
        <div className='mainnet'>
            <div>Font Size Picker</div>
            <input type='range'value={size} min='16' max='32' onChange={handleSize}/>
            <div>World Limit Count</div>
            <input type='number' value={limit} onChange={handleLimit}/>
            <textarea value={paragraph} style={{fontSize:`${size}px`}} rows='10' cols='50' onChange={handleText}/>
            {exceeded?<p style={{color:'red', fontSize:'50px'}}>{`*World Limit i.e.${limit} Exceeded`}</p>:null}
            <div>Total Number of words written: {countWords(paragraph)}</div>
            <div>Total number of characters used: {paragraph.length}</div>
            
        </div>
    )
}

export default WordCounter;