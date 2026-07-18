import React from 'react'

const Child = ({data}) => {n
    console.log(data);

  return (
    <div>
      <h1>Child</h1>
      <button className='bg-pink-500' onClick={data}>Child button</button>
    </div>
  )
}

export default Child
