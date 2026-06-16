import React from "react"
import User from "./User"
const Props_With_Conditional=()=>{
    let data=[
        {
            username:"kirti",
            age:20,
            email:"kirti@gmail.com",
            bike:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJoTu4LSpGmXJym05QeV9FO1N9ra53j8croa-DFbh-WErZ9sMtlyY8JWU&s=10"
        },
        {
            username:"shristi",
            age:22,
            email:"shristi@gmail.com",
            bike:null
        },
        {
            username:"Nibedita Baidya",
            age:23,
            email:"Nibi@gmail.com",
            bike:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSuEc3TqsMlqZeH_B7Kyv60syPJSfqoq6I5hW4oxnNPw&s=10"
        }
    ]
    return(
        <div>
            {
                data.map((ele)=>{
                    return <User data={ele}/>
                })
            }
        </div>
    )
}
export default Props_With_Conditional