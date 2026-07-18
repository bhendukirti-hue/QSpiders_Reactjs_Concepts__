import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [count,setCount]=useState(0)
    console.log("parent");
    const username="Sundari"
  return (
    <div> 
        parent <hr />
        <h1>{count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Update</button>
      <Child data={username}/>
    </div>
  )
}

export default Parent
