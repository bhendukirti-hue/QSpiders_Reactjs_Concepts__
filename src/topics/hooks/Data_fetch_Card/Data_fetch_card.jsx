import React, { useState } from 'react'
import './Card.css'
import Card from './Card'
const Data_fetch_card = () => {
    const [users,setUser]=useState(null)
    const fetchusers=async()=>{
        const data=await fetch("https://api.github.com/users")
        const res=await data.json()
        setUser(res)
    }
    console.log(users);
    
  return (
    <div className='cards'>
        <button onClick={fetchusers}>Follow</button>
        {
            users?.map((ele)=>{
                return(
                    <Card data={ele}/>
                )
            })
        }
    </div>
  )
}

export default Data_fetch_card
