import React from "react"

function Prac (props) {
    const {details,text:{newName, secondName:{tokenName}},lastName:{lastName} } = props
    return (
        <div>
            <h1>{details}</h1>
            <h2>{newName},{tokenName}</h2>
            <h3 style={{background:"red", color:"green"}}>{lastName}</h3>
        </div>
    )
}


export default Prac;