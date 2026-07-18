import React, { useState } from 'react'

const RandomTask = () => {

    const questions=[1,2,3,4,5,6]
    const [count,setCount]=useState(0)




  return (
    <div className='flex justify-center items-center flex-row'>
        <div className='w-[300px] h-[300px]  rounded-lg flex items-center justify-center text-[100px] bg-slate-200 shadow-lg shadow-slate-600'>

        </div>
        <div>
            <button onClick={()=>setCount(count-1)} disabled={count===0}>
                Prev
            </button>
        </div>
        <div>
            <button onClick={()=>setCount(count+1)} disabled={count===questions.length-1}>
                Next
            </button>
        </div>
    </div>
  )
}

export default RandomTask