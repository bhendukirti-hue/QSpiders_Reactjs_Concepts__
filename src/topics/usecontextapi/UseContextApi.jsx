import React, { createContext } from 'react'
import Parent from './Parent'

export const GlobaContext=createContext()
const UseContextApi = () => {
    const data={
       username:"Laxmi",
       age:20,
       gender:"female",
       education:"BCA",
       place:"puri",
       college:"CMT",
       batch:"2025",
    }
    
  return (
    <div>
        <GlobaContext value={data}>
     <Parent/>
              
        </GlobaContext>
   
    </div>
  )
}

export default UseContextApi