import React from 'react'
import './list.css'
function List () {
    const list = [
		{
			name: "naman",
			percent: 60.0000
		},
		{
			name: "ritesh",
			percent: 99.9431
		},
		{
			name: "hitesh",
			percent: 65.3365
		},
		{
			name: "shreya",
			percent: 80.6400
		},
		{
			name: "ankur",
			percent: 78.8970
		},
		{
			name: "vanshu",
			percent: 78.9876
		},
		{
			name: "krupal",
			percent: 85.3214
		},
	];

    return(
        <div>
            {
                list.map((ele, ind)=>{
                    if(ele.percent>75){return (
                        <div key={ind} className={ele.percent>95? 'bg-pink':""}>
                            <div>{ele.name}</div>
                            <div>{ele.percent.toFixed(2)}</div>
                        </div>
                    )}
                })
            }
        </div>
    )
}

export default List;