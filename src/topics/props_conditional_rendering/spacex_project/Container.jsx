import React from 'react'
import { GoArrowRight } from "react-icons/go";

const Container = (props) => {
  const {value:{isVideo,textposition,asset_url,text_heading,p_text,btn_text}}=props
  return (
    <div className='videocontainer'>
       {
                isVideo?<video src={asset_url} autoPlay muted loop></video>:<img src={asset_url} alt=""/>
      }
            <div className={`textcontainer ${textposition}`} >
                <h1>{text_heading}</h1>
                <p>{p_text}</p>
                <button>{btn_text} <GoArrowRight size={20} /></button>
            </div>
    </div>
  )
}

export default Container
