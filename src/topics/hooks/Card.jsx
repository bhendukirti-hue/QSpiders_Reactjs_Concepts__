import React, { useState } from 'react'

const Card = () => {
    const [cardData,setCardData]=useState({
        username:"kirti",
        age:20,
        img_url:"https://img.magnific.com/free-photo/little-cat-sitting-grass_1150-17019.jpg?semt=ais_hybrid&w=740&q=80"
    })
    const change_image=()=>{
     const url=prompt("Enetr your image url")
     setCardData({...cardData,img_url:url})
    }
    const change_name=()=>{
        alert("Change name function trigger")
        setCardData({...cardData,username:"B.Kirti"})
    }
    const change_age=()=>{
        alert("Change age function trigger")
        setCardData({...cardData,age:"21"})
    }
  return (
      <div style={{width:"300px",height:"300px",borderRadius:"10px",border:"2px solid black"}}>
        <div style={{width:"100%", height:"65%",backgroundColor:"pink",backgroundImage:`url(${cardData.img_url})`,backgroundSize:"cover"}}></div>
        <h1 style={{textAlign:"center"}}>{cardData.username}</h1>
        <p style={{textAlign:"center"}}>Age: {cardData.age}</p>
        <button onClick={change_name} style={{marginLeft:"20px",marginTop:"10px",padding:"2px",borderRadius:"10px"}}>Change Name</button>
        <button onClick={change_image} style={{padding:"2px",borderRadius:"10px"}}>Change Image</button>
        <button onClick={change_age} style={{padding:"2px",borderRadius:"10px"}}>Change Age</button>
    </div>
  )
}

export default Card
