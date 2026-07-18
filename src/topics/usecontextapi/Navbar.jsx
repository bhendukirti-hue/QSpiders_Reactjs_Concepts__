import React, { useContext } from 'react'
import { IoMdCart } from "react-icons/io";
import { GlobaContext } from './UseContextApi';
const Navbar = () => {
    const {count}=useContext(GlobaContext)

    const navlist=["Home","About","Services","Help","Projects"]
  return (
    <nav className='w-full h-20 flex justify-between shadow-lg font-bold'>
        <div className='w-[20%] h-full flex justify-center items-center'>Logo</div>
        <div className='w-[50%] h-full flex items-center justify-center'>
            <ul className='w-[100%] h-full flex justify-around items-center'>{
                navlist.map((ele,index)=>{
                    return <li key={index} className='p-2 rounded-[10px] cursor-pointer hover:shadow-lg'>{ele}</li>
                })}</ul>
        </div>
        <div className='w-[30%] h-full flex justify-center justify-around items-center'>
            <button className='w-[50px] h-[50px] items-center justify-center flex p-3 rounded-full border-2 ml-[150px] relative'><IoMdCart />
            <span className='absolute top-[-10px] right-[3px]'>{count}</span>
            </button>
            <button className='w-[100px] h-[50px] bg-blue-950 text-white items-center flex justify-center mr-[100px] rounded-[10px]'>Login</button>
        </div>
    </nav>
  )
}

export default Navbar
