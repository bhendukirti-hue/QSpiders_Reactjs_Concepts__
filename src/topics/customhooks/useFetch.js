import axios from "axios"
import { useEffect, useState } from "react"

export const useFetch=(url)=>{
  const [userData,setUserData]=useState(null)
  const fData=async()=>{
    try {
        const {data}=await axios.get(url)
        setUserData(data)
    } catch (error) {
        console.log(error);
    }
  }
  useEffect(()=>{
    fData()
  },[])
  return {data:userData}
}
