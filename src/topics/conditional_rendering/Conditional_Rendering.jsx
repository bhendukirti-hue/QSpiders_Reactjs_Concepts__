const Conditional_Rendering=()=>{
    //! Conditional Rendering
        // 1.ternary Opertaor
        // 2.Short circuit logical AND(condition && ture)
        // 3.nulish operator(null||undefiend ?? true)
        // 4.Optional chaining ():-if we are not get expecting data type 
        // 5.short circuit logical OR(variable =true || defult)
    let status=null;
    let data=undefined;
    let value=undefined;
    let result=value|| 0
    console.log(typeof result);
    
    return(
        <div>
            {/* {
                status===true ? <h1>😁happy</h1>: <h1>😭sad</h1>
            }
            {
                status && <h1>Happy😁😁</h1>
            }
            {
                status ?? <h1>sad😭😭</h1>
            } */}
                {
                    data?.map(()=>{
                        return <h1>Hii</h1>
                    })
                }
                <h2>Another statement</h2>
        </div>
    )
}
export default Conditional_Rendering