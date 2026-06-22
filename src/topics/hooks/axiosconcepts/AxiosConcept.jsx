import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CircularProgress, Hearts, RotatingLines } from 'react-loader-spinner'

const AxiosConcept = () => {
    const[products,setProducts]=useState(null)
    // with axios library
    const fetchData=async()=>{
        const {data}=await axios.get("https://fakestoreapi.com/products")
        setTimeout(()=>{
            setProducts(data)
        },2000)
    }
    useEffect(()=>{
        fetchData()
    },[])
  return (
    
    <div>
     
     {
        !products ? <RotatingLines/>:products.map((ele,index)=>{
            return <h1 key={index}>{ele.title}</h1>
        })
     }
    </div>
  )
}

export default AxiosConcept
