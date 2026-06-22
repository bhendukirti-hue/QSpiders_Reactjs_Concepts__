import React from 'react'
import Child from './Child';

const Parent = () => {
    const money=1000;
  return (
    <div>
      <Child data={money}/>
    </div>
  )
}

export default Parent
