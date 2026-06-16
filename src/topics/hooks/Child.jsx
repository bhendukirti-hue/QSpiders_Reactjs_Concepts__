import React, { useState } from 'react'

const Child = () => {
    const [value,setValue]=useState(100)
    const updateValue=()=>{
        setValue(value+1)
    }
    console.log("Child component");
    
  return (
    <div>
        <h1>Child</h1>
        <h2>{value}</h2>
      <button onClick={updateValue}>Update Value</button>
    </div>
  )
}

export default Child
