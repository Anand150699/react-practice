import React, {useState} from 'react'
import Button from '../../button'

function AddItem(){
    const [item, setItem] = useState([])

    function handleItem () {
        setItem([...item,{id:item.length, value: Math.floor(Math.random()*10+1)}])
    }

    return(
        <div>
            <Button btnText="Add Item" handleclick={handleItem}/>
            <ul>
                {item.map((ele, ind)=>{
                  return  <li key={ele.id}>{`${ele.value} and ${ele.id}`}</li>
                })}
            </ul>
        </div>
    )
}

export default AddItem;