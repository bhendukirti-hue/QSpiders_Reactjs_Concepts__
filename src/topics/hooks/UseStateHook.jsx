import { useState } from "react";
import Child from "./Child";

const UseStateHook=()=>{
    // Top lavel
    // ! [const intial value , upadte function] =use State(intial value)
    const [count,setCount]=useState(0)

    const updateCount=()=>{
        setCount(count+1)

    }
    console.log("Parent component");
    
    
    // const [user,setUser]=useState(null)
    // const fetchData=async()=>{
    //     const data=await fetch("https://api.github.com/users")
    //     const res=await data.json()
    //     console.log(res);
    // }
    //     console.log(res);
    // fetchData()


    // setTimeout(()=>{
    //     console.log("hii");
    // },0);
    // console.log("hello");
    // console.log(Promise.resolve("Tata"));
    
    
    return(
        <div>
            <h1>Use State Hook</h1>
            <p>{count}</p>
            <Child/>
            <button onClick={updateCount}>Update</button>
        </div>
    )
}
export default UseStateHook;