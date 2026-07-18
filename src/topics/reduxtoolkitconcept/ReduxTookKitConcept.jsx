import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../../features/counterSlice';

const ReduxTookKitConcept = () => {
    const {count}=useSelector((state)=>state.counter)
    console.log(count);
    const dispatch=useDispatch()
  return (
    <div>
        <h1>{count}</h1>
        <hr />
        <button onClick={()=>dispatch(increment())} className='bg-green-500 rounded-[10px]'>increment</button>
    <button onClick={()=>dispatch(decrement())} className='bg-green-500 rounded-[10px]'>Decrement</button>
    <button onClick={()=>dispatch(reset())} className='bg-green-500 rounded-[10px]'>Reset</button>
    </div>
  )
}

export default ReduxTookKitConcept
