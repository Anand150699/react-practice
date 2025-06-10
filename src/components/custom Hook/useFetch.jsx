import React, { useEffect, useState } from 'react'

function useFetch(url){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    async function fetchData(url){
        try{
            setLoading(true)
            const data = await fetch(url);
            const result = await data.json();
            setData(result.products)
            setLoading(false)
        }
        catch(err){
            setError(`error aa gya ${err}`)
        }
    }

    useEffect(()=>{
        fetchData(url)
    },[url])

    return [data, loading, error]
}

function UseFetch() {
    
    const [data, loading, error] = useFetch('https://dummyjson.com/products')

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div>
      {
        data.map((ele, ind)=>{
            return <li key={ind}>{ele.title}</li>
        })
      }
    </div>
  )
}

export default UseFetch
