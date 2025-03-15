import React, { useState } from 'react'

function FormData() {
   const[sendData, setSendData] = useState({sending:false, sent: false})
     const [eleIndex, setEleIndex] = useState(null)
     const [dataList, setDataList] = useState([])
     const [data, setData] = useState({
       firstName : '' ,
       lastName : '' ,
     }) ;
    
     function handleSubmit (e) {
       e.preventDefault() ;
   
       if(eleIndex!==null) {
         dataList[eleIndex] = data ;
         setDataList(dataList)
       }else{
         setDataList([...dataList, data])
       }
       
       setData({
         firstName : '' ,
         lastName : '' ,
       })
     } ;
   
     function handleChange (e) {
       setData({...data, [e.target.name] : e.target.value})
     } ;
   
     function handleDelete (index) {
         setDataList(dataList.filter((ele, ind)=> ind!==index))
     }
   
     function handleUpdate (index) {
         setData(dataList[index]) ;
         setEleIndex(index)
     }
   
     function handleSubmitData(){
   
         setDataList([])
         if(dataList.length>0){
           setSendData({sending:true, sent: false})
           setTimeout(()=>{
           setSendData({sending:false,sent:true})
         },1000)
           setTimeout(()=>{
             setSendData({sending:false , sent: false})
           },2000)
         }
           
   
     }
     return (
       <div>
         <div>
           
           <form onSubmit={handleSubmit}>
             <label for='name'>First Name : </label>
             <input 
             type='text'
             value={data.firstName} 
             name='firstName'
             placeholder='Your Name...'
             onChange={handleChange}
             required
             autoFocus/>
             <label for='name'> Last Name : </label>
             <input 
             type='text'
             value={data.lastName} 
             name='lastName'
             placeholder='Your Last Name...'
             onChange={handleChange}
             required
             />
             <br></br>
             <button type='submit'>Submit</button>
           </form>
         </div>
         <div>
           <ul>
             {
              dataList.map((ele, ind)=>{
                 return(
                   <li key={ind} style={{listStyleType:'square'}}>
                     <span><strong> First Name: </strong>{ele.firstName}<strong> Last Name: </strong>{ele.lastName}</span>
                     <button onClick={()=>handleDelete(ind)}>Delete</button>
                     <button onClick={()=>handleUpdate(ind)}>Update</button>
                   </li>
                   
                 )
              })
             }
           </ul>
         </div>
         <button  onClick={handleSubmitData}>Send Data</button>
         {sendData.sending?
         <h3 style={{color:'red'}}>Sending data....</h3>:null}
         {sendData.sent? 
         <h3 
         style={{color:'green'}}>Data sent successfully....</h3>:null}
       </div>
     )
}

export default FormData
