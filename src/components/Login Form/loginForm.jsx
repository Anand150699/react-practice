import React, {useState} from 'react'
import './style.css'
function LoginForm () {
    const [details, setDetails] = useState({
        userName: "",
        userMail: "",
        userContact : "",
    });
    const [show, setShow] = useState(false)
    const [move, setMove] = useState(true)
    const [req, setReq] = useState(true)
    function handleClick (e) {
        e.preventDefault();
        if(details.userName && details.userMail && details.userContact){
            setShow(true)
            setMove(false)
            setReq(true)
        }
        else{
            alert("Please Fill all the details")
            setReq(false)
        }
    }

    function handleName (e) {
        const val = e.target.value;
        setDetails({...details, userName:val})
    }
    function handleMail (e) {
        const val = e.target.value;
        setDetails({...details, userMail:val})
    }
    function handleContact (e) {
        const val = e.target.value;
        setDetails({...details, userContact:val})
    }
    return(
        <div>
            <center>
                <h3>Log-in Form</h3>
                {move?<form className='form'>
                    <label for='name'>User Name</label>
                    <input onChange={handleName} value={details.userName} type='text' placeholder='Enter Your Name....' required/>
                    {!details.userName?<span style={{color:'red', fontSize:'10px'}}> ***Please Add Name....</span>:null}
                    <label for='usermail'>User Mail</label>
                    <input onChange={handleMail}  type='E-mail' placeholder='Enter Your Mail....' required/>
                    {!details.userMail?<sapn style={{color:'red', fontSize:'10px'}}> ***Please Add Email....</sapn>:null}
                    <label for='userphone'>User Contact Number</label>
                    <input onChange={handleContact}  type='number' placeholder='Enter Your Phone Number....' required/>
                    {!details.userContact?<span style={{color:'red', fontSize:'10px'}}> ***Please Add Contact....</span>:null}
                    <button className='btn' onClick={handleClick}>Login</button>
                </form>: null}
                {show? <div>
                    <h5>Login User Name:{details.userName} </h5>
                    <h5>Login User Email:{details.userMail} </h5>
                    <h5>Login User Contact:{details.userContact} </h5>
                </div> : null}
            </center>
            {
                req?null:<p style={{color:'red'}}>***Please Enter All Details</p>
            }
        </div>
    )
}

export default LoginForm;