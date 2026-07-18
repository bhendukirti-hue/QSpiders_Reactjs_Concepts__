import React, { useContext } from 'react'
import { GlobalContext } from './UseContext_Task';

const Card = ({users,updateCount}) => { 
  console.log(users);
   const {count}=useContext(GlobalContext)
   console.log(data);
   
  return (
    <div className='w-[300px] h-[350px] bg-white shadow-lg shadow-blue-600 rounded-[20px] relative'>
      <img src={users.image} alt={users.name} className='w-[180px] h-[180px] absolute rounded-full border-2 left-14 top-[-70px]'/>
      <div>
        <h1 className='mt-[120px] font-bold text-center text-[20px]'>{users.name}</h1>
        <p className='mt-2 text-center text-[12px]'>{users.about}</p>
        <span className='ml-[100px]'>⭐⭐⭐⭐</span><br />
        <span className='flex items-center justify-center text-[20px] font-bold'>${users.Reviews}</span>
        <button className='w-[200px] bg-slate-950 text-white ml-[50px] mt-[20px] border-2 px-3 py-2 rounded-[20px] hover:bg-blue-900'onClick={updateCount}>BUY NOW</button>
      </div>
    </div>
  )
}

export default Card