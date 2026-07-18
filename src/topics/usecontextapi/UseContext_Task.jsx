import React, { createContext, useState } from 'react'
import Navbar from './Navbar';
import Card from './Card';
import Home from './Home';
export const GlobalContext=createContext()
const UseContext_Task = () => {
  const[count,setcount]=useState(0)
      const updateCount=()=>{
          setcount(count+1)
      }
  return (
    <div>
        <GlobalContext.Provider value={{count,setcount}}>
        <Navbar/>
        <Home updateCount={updateCount}/>
        </GlobalContext.Provider>
    </div>
  )
}

export default UseContext_Task
