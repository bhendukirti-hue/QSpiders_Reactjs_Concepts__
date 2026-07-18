import React from 'react'
import Card from './Card';

const Home = ({updateCount}) => {
    const products = [
  {
    id: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ9CaxBsVSSupDHsO7IZ5xow5_T7l1qcaRWGHlIXSjpXLoyinDSZ7fGUo&s=10",
    name: "Wireless Headphones",
    about:"connect to devices like smartphones or laptops via Bluetooth or radio frequencies",
    price: 59.99,
    Ratings:4.5,
    Reviews:110
  },
  {
    id: 2,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTORfLEKfB9zLAaenOdtxb2Ly-cEIjjGXBmyuYiY4xCXIMyseLxMkNhXyg&s=10",
    name: "Smart Watch",
    about:"A smartwatch is a wearable, computerized wristwatch that functions as an.",
    price: 89.99,
    Ratings:4,
    Reviews:99
  },
  {
    id: 3,
    image: "https://dninesports.com/cdn/shop/files/Bitmap_1.png?v=1773400180&width=1206",
    name: "Running Shoes",
    about:"A high-quality running shoe description highlights four core components.",
    price: 79.99,
    Ratings:4.5,
    Reviews:120
  }
];
        
  return (
    <div className='w-[100%] h-[700px] bg-gray-300 flex items-center justify-around'>
      <Card users={products[0]} updateCount={updateCount}/>
      <Card users={products[1]} updateCount={updateCount}/>
      <Card users={products[2]} updateCount={updateCount}/>
    </div>
  )
}

export default Home 

