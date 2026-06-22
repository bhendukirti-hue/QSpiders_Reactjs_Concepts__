import React, { useRef , useState } from 'react'

const UseRefHooks = () => {
    const h1ref=useRef()
    const onoffbox=useRef()
    console.log(h1ref);
    const changeColor=()=>{
       h1ref.current.style.backgroundColor="red"
    }
    const Onbox=()=>{
        onoffbox.current.style.visibility="visible"
    }
    const Offbox=()=>{
        onoffbox.current.style.visibility="hidden"
    }
    console.log("hello");
    
    
  return (
    <div>
        <h1 ref={h1ref}>UseRefHooks</h1>
        <button onClick={changeColor}>Click</button>
        <div ref={onoffbox} style={{width:"100px",height:"100px",backgroundColor:"greenyellow"}}></div>
        <button onClick={Onbox}>ON</button>
        <button onClick={Offbox}>OFF</button>
    </div>
  )
}

export default UseRefHooks