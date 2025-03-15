import { useEffect, useState } from "react"
import MovieCard from "../Movie Card/MovieCard";
import Button from "../../button";
function UseEffect () {
    const [counter, setCounter] = useState(0)
    function handleIncrease(){
        setCounter((prev)=>{
            return prev+1
        })
    }
    useEffect(()=>{
        if(counter){
            alert("Counter is incresed")
           }
       console.log("Hi")
    },[counter])
    return(
        <div>
        <h1>Counter: {counter}</h1>
        <Button btnText={"Increase"} handleClick={handleIncrease}/>
        </div>
    )
    

}

export default UseEffect;