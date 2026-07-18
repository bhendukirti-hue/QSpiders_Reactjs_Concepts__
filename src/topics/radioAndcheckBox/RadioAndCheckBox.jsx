import React, { useState } from 'react'

const RadioAndCheckBox = () => {
    const [gender,setGender]=useState("Male")

    const handleForm=(e)=>{
        e.preventDefault()
        console.log(gender)
    }
    const handleInput=(e)=>{
        const {name,value}=e.target
        setGender(value)
    }
  return (
    <div>
        <form onSubmit={handleForm}>
            <input type="radio" name="gender" value="Male" onChange={handleInput} checked={gender=="Male"}/>Male
            <input type="radio" name="gender" value="Female" onChange={handleInput} checked={gender=="Female"}/>Female
            <input type="radio" name="gender" value="Others" onChange={handleInput} checked={gender=="Others"}/>Others
            <br />

            <button type="submit" className='border-black p-2 bg-slate-400 rounded-lg mt-4 ml-3'>Submit</button>
        </form>
    </div>
  )
}

export default RadioAndCheckBox