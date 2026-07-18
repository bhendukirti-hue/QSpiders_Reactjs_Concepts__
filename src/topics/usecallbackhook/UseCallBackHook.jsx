import React, { useCallback, useState } from 'react'
import Child from './Child'

const UseCallBackHook = () => {
    const[count,setCount]=useState(0)
    console.log("parent");
    const username="sundari"
    const demo=useCallback(()=>{
        console.log("parent created this function");
        
    },[])
  return (
    <div>
        <p>use callback</p>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)} className='bg-green-600' >update</button>
        <hr />
        <Child data={demo}/>
    </div>
  )
}

export default UseCallBackHook
