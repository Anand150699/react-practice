import { useRef, useState, useEffect} from "react";
import UseEffect from "../UseEffext/useEffect";

function useRef2() {
    const[count, setCount] = useState(0)
    const countRef = useRef(0)
    useEffect(()=>{
        countRef.current = countRef.current+1
    })
  return (
    <div>
        <h1>{count}</h1>
        <h1>UseRef's {countRef.current}</h1>
        <button onClick={()=>setCount(count+1)}>Add</button>
    </div>
  );
}

export default useRef2