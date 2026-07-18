import React, { useContext } from 'react'
import GrandChild from './GrandChild'
import { GlobaContext } from './UseContextApi';

const Child = () => {
const result= useContext(GlobaContext)
console.log(result);
  return (
    <div>
        <h1>Child</h1>
        <GrandChild/>
    </div>
  )
}

export default Child