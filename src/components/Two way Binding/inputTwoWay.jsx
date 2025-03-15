import React from 'react'

function InputTwoWay (props) {
    const {type, placeholder, searchAction,value} = props
    function getInput (e) {
        searchAction(e.target.value)
    }   
    return (
        <div>
            <input value={value} type={type} placeholder={placeholder} onChange={getInput}/>
        </div>
    )
}

export default InputTwoWay;