import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
    const[count,setCount]=useState(0)
    const updateCount=()=>{
        setCount(count+1)
    }
    const[val,setVal]=useState(100)

    //! useEffect(callback)
    // useEffect(()=>{
    //     console.log("Hello");
    // })

    // ! useEffect(callback,[]) it executes only one time i.e in the intial load.
    // useEffect(()=>{
    //     console.log("Hello");
    // },[])

    //! useEffect(callback,[dependency])  it the dependency value changes the callback function will executes
    // useEffect(()=>{
    //     console.log("Hello");
    // },[count,val])

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={updateCount}>Update</button>
      <hr />
      <h1>{val}</h1>
      <button onClick={()=>{setVal(val+1)}}>Update val</button>
    </div>
  )
}

export default UseEffectHook
