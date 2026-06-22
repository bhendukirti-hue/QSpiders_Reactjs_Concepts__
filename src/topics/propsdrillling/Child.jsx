import React from 'react'
import GrandChild from './GrandChild'

const Child = ({data}) => {
  return (
    <div>
      <GrandChild data={data}/>
    </div>
  )
}

export default Child
