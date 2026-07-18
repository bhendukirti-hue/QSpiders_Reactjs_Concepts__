import React, { useState } from 'react'

const Randomized = () => {

    const characters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

    const [char,setChar]=useState('💙')

    const changechar=() =>{
        for(let i=1;i<=characters.length;i++) {
            setTimeout(() => {
                setChar(characters[i].toUpperCase())
            },100*i)
        }
        setTimeout(()=>{
            setChar(characters[Math.floor(Math.random() * 26)].toUpperCase())
        },100*characters.length+5)
    }

    const reset=() =>{
        setChar("👀")
    }

   

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col gap-[100px]">
      <div className="w-[300px] h-[300px]  rounded-full flex items-center justify-center text-[100px] bg-slate-200 shadow-lg shadow-slate-600">
        {char}
      </div>
      <div>
        <button
          className="border-2 p-3 rounded-lg bg-blue-300 text-white font-bold hover:bg-blue-800  hover:text-white transition-all delay-75 "
          onClick={changechar}
        >
          Get Target Head
        </button>
        <button
          className="border-2 p-3 rounded-lg bg-blue-300 text-white font-bold hover:bg-blue-800  hover:text-white transition-all delay-75 "
          onClick={reset}
        >
            Reset
        </button>
      </div>
    </div>
  )
}

export default Randomized