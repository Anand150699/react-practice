import React, {useContext, useState} from 'react'
import './shapes.css'
;


// function Shapes () {
//     const [shape, setShape] = useState([]);
//     const [selectedShape, setSelectedShape] = useState("circle")
//     function handleClick () {
//         setShape([...shape, selectedShape.toLowerCase()])
//     }

//     function handleChange (e) {
//         setSelectedShape(e.target.value)
//     }

//     return(
//         <div>
//             <div>
//             <select onChange={handleChange} value={selectedShape}>
//                 <option>Circle</option>
//                 <option>Square</option>
//             </select>
//             <button onClick={handleClick}>Add Shape</button>
//             </div>
//             <div>
//                 {
//                     shape.map((ele, ind)=>{
//                         return <div className={ele} key={ind}>{ind}</div>
//                     })
//                 }
//             </div>
//         </div>
//     )
// }

// export default Shapes;

const Shapes = () =>{
    const [shape, setShape] = useState([]);
    const [selectedShape, setSelectedShape] = useState("Square")
    function handleChange(e){
        const val = e.target.value.toLowerCase()
        setSelectedShape(val)
    }
    function handleClick(){
        setShape([...shape, selectedShape])
    }
    return (
        <div>
            <div>
                <select onChange={handleChange}>
                    <option value='Square'>Square</option>
                    <option value='Circle'>Circle</option>
                </select>
                <button onClick={handleClick}>Add Shape</button>
            </div>
            <div>
                {
                    shape.map((ele, ind)=>{
                        return <div key={ind} className={ele}>{ind}</div>
                    })
                }
            </div>
            
        </div>
    )
}

export default Shapes