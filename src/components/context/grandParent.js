import React,{ useState } from 'react';

import { MyContext } from './centralStore';
import Child from './child';

function GrandParent (){
    const [message , setMessage] = useState('Hey this is the message from the grand parent')
    const value  = {message , setMessage} // {message:message , setMessage:setMessage}
    return(
  <MyContext.Provider value= {value}>
    <div>
      <h2>I am Grand Parent::::::: {message}</h2>
      <Child/>
    </div>
  </MyContext.Provider>
    )
}

export default GrandParent;