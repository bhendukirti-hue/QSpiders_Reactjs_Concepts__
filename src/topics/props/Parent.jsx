import Child from "./Child"

const parent=()=>{
    const data=["sundari","sheela","leela"]    
    return(
        <div>
            <Child name="sundari"/>
            <Child name="mala"/>
            <Child name="leela"/>
            {/* defult user */}
            <Child/>
        </div>
    )
}
export default parent