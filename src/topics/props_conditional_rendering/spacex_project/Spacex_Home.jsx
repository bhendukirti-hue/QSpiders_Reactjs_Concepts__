import React from 'react'
import Nav from './nav/Nav'
import './spacex.css'
import Container from './Container'
import Footer from './footer/Footer'
const Spacex_Home = () => {
  const data=[
    {
      isVideo:true,
            textposition:"leftside",
            asset_url:"https://sxcontent9668.azureedge.us/cms-assets/assets/20260522_Starship_Flight12_web1920_v2_71d68b5ee9.mp4",
            text_heading:"Making life multiplanetary",
            p_text:"SpaceX was founded under the belief that a future where humanity is out exploring the stars is fundamentally more exciting than one where we are not.",
            btn_text:"Explore"
    },
    {
      isVideo:true,
            textposition:"leftside",
            asset_url:"https://sxcontent9668.azureedge.us/cms-assets/assets/Mars_Rotation_Web_HB_d96299f9de.mp4",
            text_heading:"Making life multiplanetary",
            p_text:"SpaceX was founded under the belief that a future where humanity is out exploring the stars is fundamentally more exciting than one where we are not.",
            btn_text:"Explore"
    },
    {
      isVideo:false,
            textposition:"rightside",
            asset_url:"https://sxcontent9668.azureedge.us/cms-assets/assets/Revolutionizing_Space_Tech_Desktop_ec67ad03c2.jpg",
            text_heading:"Revolutionizing space technology",
            p_text:"SpaceX’s Starship spacecraft and Super Heavy rocket is a fully reusable transportation system designed to carry both crew and cargo to Earth orbit, the Moon, Mars, and beyond.",
            btn_text:"Explore"
    },
    {
      isVideo:true,
            textposition:"leftside",
            asset_url:"https://sxcontent9668.azureedge.us/cms-assets/assets/Space_X_Falcon_Heavy_UAS_Landing_DESKTOP_compress_b4568daf9c_5e2026727a.mp4",
            text_heading:"World’s leading launch service provider",
            p_text:"SpaceX leads the world in launches with its reliable, reusable rockets and is developing the fully and rapidly reusable rockets necessary to transform humanity’s ability to access space into something as routine as air travel.",
            btn_text:"Explore"
    },
    {
      isVideo:false,
            textposition:"rightside",
            asset_url:"https://sxcontent9668.azureedge.us/cms-assets/assets/Advancing_Human_Spaceflight_Desktop_61c8ba1c67.jpg",
            text_heading:"Advancing human spaceflight",
            p_text:"Since returning human spaceflight capabilities to the United States in 2020, SpaceX is helping build a new era where not just hundreds of people, but thousands and ultimately millions will be able to explore space.",
            btn_text:"Explore"
    },
    {
      isVideo:true,
            textposition:"leftside",
            asset_url:"https://sxcontent9668.azureedge.us/cms-assets/assets/Starlink_12_10_20250428_Deploy_website_DESKTOP_14fe7e072c.mp4",
            text_heading:"Delivering high-speed internet from space",
            p_text:"Starlink is the world’s most advanced satellite constellation in low-Earth orbit, delivering reliable broadband internet capable of supporting streaming, online gaming, video calls, and more.",
            btn_text:"Explore"
    }
  ]
  return (
    <div className='homepage'>
      <Nav/>
      {
        data.map((ele)=>{
          return <Container value={ele}/>
        })
      }
      <hr />
      <Footer/>
    </div>
  )
}

export default Spacex_Home
