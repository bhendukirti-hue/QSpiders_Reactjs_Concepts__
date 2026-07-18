import React, { useRef } from 'react'

const UncontroledForm = () => {
    const usernameRef=useRef()
    const ageRef=useRef()
    const handleForm=(e)=>{
        e.preventDefault()
        console.log(usernameRef.current.value);
        console.log(ageRef.current.value);
        usernameRef.current.value=""
        ageRef.current.value=""
    }
    
  return (
    <div>
      <h1>uncontroldeForm</h1>
      <form onSubmit={handleForm}>
        <input 
        type="text"
         placeholder='Username'
          className='border-2'
          ref={usernameRef}
        /><br />
        <input type="number"
         placeholder='Age'
         className='border-2'
         ref={ageRef}
          /> <br />
        <button className='border-2'>Submit</button>
      </form>
    </div>
  )
}

export default UncontroledForm
