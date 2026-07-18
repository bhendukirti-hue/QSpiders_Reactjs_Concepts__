import React, { useContext } from 'react'
import Child from './Child'
import { GlobaContext } from './UseContextApi'

const Parent = () => {
   const result= useContext(GlobaContext)
   console.log(result);
   
  return (
    <div>
        <h1>PARENT</h1>
        <Child/>
    </div>
  )
}

export default Parent