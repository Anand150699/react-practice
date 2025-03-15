import React, { useEffect, useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';
function ProductListing () {
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    async function fetchProducts() {
       try {
        const data = await fetch('https://dummyjson.com/products');
        const res = await data.json()
        setProducts(res.products)
        } 
        catch(error){
            console.log("Error::::", error)
        }
    }

    useEffect(()=>{
        fetchProducts()
    },[])

    function handleClick (id){
        navigate(`/products/${id}`)                   //window.location.pathname = `products/${id}` provide slash before products/${id} i.e. /products/${id}
                                                    // for getting the only path as products/id
    }

    return(
        <div className='films'>
            {
                products.map((item)=>{
                    return(
                        <div key={item.id} className='product' onClick={()=>handleClick(item.id)}>
                            <img src={item.thumbnail}/>
                            <div>{item.title}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductListing