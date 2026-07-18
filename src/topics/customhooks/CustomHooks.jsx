import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useFetch } from './useFetch'

const CustomHooks = () => {
    const userData=useFetch("https://api.github.com/users")
    console.log(userData);
    const storeData=useFetch("https://fakestoreapi.com/products")
    console.log(storeData);
    
  return (
    <div>
        <h1>Custom hook</h1>
    </div>
  )
}

export default CustomHooks
