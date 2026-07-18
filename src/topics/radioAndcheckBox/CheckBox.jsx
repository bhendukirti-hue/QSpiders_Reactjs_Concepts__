import React, { useState } from 'react'

const CheckBox = () => {
    const [terms,setTerms]=useState(false)

    const handleForm=(e)=>{
        e.preventDefault()
        console.log(terms)
    }
    const handleInput=(e)=>{
        setTerms(e.target.checked)
    }
  return (
    <div>
        <form onSubmit={handleForm}>
            <input type="checkbox" name="terms" checked={terms}  onChange={handleInput}/>Terms and conditions
            <br />
            <button type="submit" className='bg-slate-400 p-2 rounded-lg mt-2 ml-2' onChange={handleInput}>Submit</button>
        </form>
    </div>
  )
}

export default CheckBox