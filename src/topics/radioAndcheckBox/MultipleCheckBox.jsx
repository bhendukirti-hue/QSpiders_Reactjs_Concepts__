import React, { useState } from 'react'

const MultipleCheckBox = () => {

    const [skills,setSkills]=useState([])


   const handleForm=(e)=>{
    e.preventDefault()
    console.log(skills)
   }

   const handleCheckbox=(e)=>{
    if(e.target.checked){
        setSkills([...skills,e.target.value])
    }
    else{
        setSkills(skills.filter((skills)=>skills !==e.target.value))
    }
}


  return (
    <div>
        <form onSubmit={handleForm}>
            <label htmlFor="Skills"> Skills:</label>
            <input type="checkbox" onChange={handleCheckbox} value="HTML" />HTML
            <input type="checkbox" onChange={handleCheckbox} value="CSS"/>CSS
            <input type="checkbox" onChange={handleCheckbox} value="JS"/>JS
            <input type="checkbox" onChange={handleCheckbox} value="React"/>React
            <input type="checkbox" onChange={handleCheckbox} value="Node"/>Node
                        <br />
            <button type="submit" className='mt-1 ml-2 bg-slate-400 rounded-lg' onChange={handleCheckbox}>Submit</button>
        </form>
    </div>
  )
}

export default MultipleCheckBox