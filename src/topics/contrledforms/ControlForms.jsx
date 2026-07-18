import React, { useState } from 'react'

const ControlForms = () => {
    const[username,setUsername]=useState("")

    const handleForm=(e)=>{
        e.preventDefault()
        // console.log(username);
        
    }
    const handleInput=(e)=>{
        const{value}=e.target
        // console.log(name);
        console.log(value);
        setUsername(value)
        // console.log(e.target.value);
        
    }
  return (
    <div className='w-full h-[100vh] flex items-center justify-center'>
      <form onSubmit={handleForm} className='w-[400px] h-[500px] border-2 flex items-center justify-center'>
        <input type="text" placeholder='username' className='p-3 border-2 border-black' onChange={handleInput} name='username' value={username} /><br />
        <button className='p-2 border-2 border-black'>submit</button>
      </form>
    </div>
  )
}

export default ControlForms
