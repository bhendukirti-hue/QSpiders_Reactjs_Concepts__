import React, { useReducer } from 'react'
import { toast } from 'react-toastify';

const UseReducerHook = () => {
    const reducer=(state,action)=>{
      switch (action) {
        case "incre":
            return state=state+1
            break;
        case "decre":
            return state=state-1
            break
        case "reset":
            return state=0
            break
        default:
            toast.error("Something went wrong",{position:"top-center"})
            return state
      }
      
      
    }
    const [count,dispatch]=useReducer(reducer,0)
    console.log(count);
    
  return (
    <div>
        <h1>{count}</h1>
        <button  onClick={()=>dispatch("incre")} className='bg-green-500 p-2 rounded-[15px]' >increment</button>
        <button  onClick={()=>dispatch("decre")} className='bg-blue-500 p-2 rounded-[15px]'>Decrement</button>
        <button  onClick={()=>dispatch("reset")} className='bg-pink-500 p-2 rounded-[15px]'>reset</button>

    </div>
  )
}

export default UseReducerHook
