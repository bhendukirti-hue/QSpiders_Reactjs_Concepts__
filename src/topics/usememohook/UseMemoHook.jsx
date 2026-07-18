import React, { useMemo, useState } from 'react'

const UseMemoHook = () => {
    const [count,setCount]=useState(0)
    const res= useMemo(()=>{
        let sum=0
    for(let i=1;i<=1000000000;i++){
        sum+=i;
    }
    return sum
    },[])
    console.log(res);
    
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)} className='bg-green-500'>update</button>
    </div>
  )
}

export default UseMemoHook
