import { useState } from "react"

//rgb(0, 0, 0) rgb(255, 255, 255)
function Theme () {
    const [theme, setTheme] = useState(true)
    function handleClick () {
       setTheme(!theme)
    }
    return (
        <div style={{backgroundColor: !theme?'rgb(0, 0, 0)':'rgb(255, 255, 255)', color: theme?'black':'white'}}>
            <p>{theme? 'This is Day...' : 'This is Night...'}</p>
            <button onClick={handleClick}>{theme ? 'Get to night':'Get to Day' }</button>
        </div>
    )
}

export default Theme;