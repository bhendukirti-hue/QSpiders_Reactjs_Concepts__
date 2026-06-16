import React from "react";
const User=(props)=>{
const {data:{username,age,email,bike}}=props
console.log(username);

    
    return(
        <div>{
            bike && <img src={bike} alt={username} width={300} />
        }
            <h1>{username}</h1>
        </div>
    )
}
export default User