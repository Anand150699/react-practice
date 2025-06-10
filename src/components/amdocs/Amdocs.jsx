import React, {useState} from 'react'
import './amdocs.css'
import Button from '../../button'
function Amdocs () {

  const [data, setData] = useState({firstName: "",  lastName: ""})
  const [list, setList] = useState([])
  const [listInd, setListInd] = useState(null)
  const [send, setSend] = useState({showForm: true , showData: true})

  function handleSubmit(e){
    e.preventDefault()
    if(listInd !== null){
      let updatedList = [...list]
      updatedList[listInd] = data
      setList(updatedList)
      setListInd(null)
    }
    else{ 
      if(data.firstName || data.lastName){
      setList([...list,data])
      }
    }
   
    setData(
      {
        firstName: "", 
        lastName: ""
      }
    )
  }

  function handleChange(e){
    setData({...data, [e.target.name]: e.target.value})
    
  }

  function handleDelete(ind){
    let listCopy = [...list]
    let updatedList = listCopy.filter((ele, index)=> ind!==index)
    setList(updatedList)
  }

  function handleUpdate(ind){
    setData(list[ind])
    setListInd(ind)
  }

  function handleFinals(){
    if(list.length>0){
      setList([])
      setSend({...send, showForm: false})
      console.log(send.showData)
      setTimeout(()=>{
        set
      })
    }

  }
 
  return(
    <div>
      {send.showForm && <form className='formStyle' onSubmit={handleSubmit}>
      <label htmlFor="name">First Name: </label>
      <input type='text'
      placeholder='First Name'
      onChange={handleChange}
      name='firstName'
      value={data.firstName}/>
      <label htmlFor="name">Last Name: </label>
      <input type='text'
      placeholder='Last Name'
      onChange={handleChange}
      name='lastName'
      value={data.lastName}/>
      <button type='submit'>Add</button>
      </form>}
      <div>
        <ol>
          {
            list.map((ele, ind)=>{
              return (
                <div>
                  <li key={ind}>{`${ele.firstName} ${ele.lastName}`}</li>
                  <button onClick={()=>handleDelete(ind)}>Delete</button>
                  <button onClick={()=>handleUpdate(ind)}>update</button>
                </div>
              )
            })
          }
        </ol>
      </div>
      <div>
        <Button handleClick={handleFinals} btnText={"SUBMIT"} classes={"submitBtn"}/>
      </div>
    </div>
  )
}

export default Amdocs