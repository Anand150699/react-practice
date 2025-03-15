import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function SingleProductDetails () {

    const {id} = useParams()      // clg params {id: '1'} 
    const [productDetails, setProductDetails] = useState({})

    async function  fetchProduct() {

       try{
        const data = await fetch(`https://dummyjson.com/products/${id}`);
        const res = await data.json();
        setProductDetails(res);
        }
        catch(error){
            console.log("Error::::",error);
        }

    }

    useEffect(()=>{
        fetchProduct();
    },[id]);


    return (
        <div>
            <img/>
            <div>{productDetails?.title}</div>
            <div>{productDetails?.description}</div>
            <div>{productDetails?.price}</div>
            <div>{productDetails?.brand}</div>
            <div>{productDetails?.availabilityStatus}</div>
        </div>
    )
}

export default SingleProductDetails;