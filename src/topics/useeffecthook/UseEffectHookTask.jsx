import React, { useEffect, useState } from 'react'

const UseEffectHookTask = () => {
    const[count,setcount]=useState(0)
    const updateCount=()=>{
        setcount(count+1)
    }
    // ! without axios library
    const fetchData=async()=>{
        const data= await fetch("https://fakestoreapi.com/products")
        const res=await data.json()
        console.log(res);
        
    }
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={updateCount}>upadte</button>
    </div>
  )
}

export default UseEffectHookTask
