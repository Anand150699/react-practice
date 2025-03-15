import React, {useState} from 'react'
import './input.css'

function Input () {
    const [name, setName] = useState({firstName:'', lastName:''});
    function handleNameChange(e){
        setName({...name, firstName:e.target.value})
    }

    function handleLastName(e){
        setName({...name, lastName:e.target.value})
    }
   
    return(
        <form className='input'>
            <label for='name' >Name</label>
            <input onChange={handleNameChange} value={name.firstName} type='text' placeholder='Enter your Name...'/>
            <br></br>
            <label for='name' >Last Name</label>
            <input onChange={handleLastName} value={name.lastName} type='text' placeholder='Enter your Last Name...'/>

            <h1>Your name is: {name.firstName}</h1>
            <h1>Your Last Name is: {name.lastName}</h1>
        </form>
    )
}

export default Input