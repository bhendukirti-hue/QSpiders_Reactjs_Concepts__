const Jsx_Rules=()=>{
    // We can write all js code 
    let username="sunadri"
    let age=20
    if(false){
        console.log("true block");
    }
    else{
        console.log("false block");
    }
    let theme=true
    let arr=["kirti","pritti","sruti","kiti","Jyoti","liti","Shristi"]
    return(
        <div>
            {
                // jsx expression
                // We can acess the js code but we cant create the js
                // Jsx Expression Rules
                // 1.We cant declare js variables but we can access it 
                // let username="sunadri"

                // 2.we cant use conditional statements like if , if-else , else-if,switch
                // if(){}

                // 3.We cant use loops like forloop, while loop, do while loop, for in loop, for of loop
                // 4.Null and undefined value not print
            }
            <h1>Hello {username}</h1>
            <button>{theme? "light":"Dark"}</button>
            <ol>
            {
                arr.map((ele)=>{
                    return(
                        <li>{ele}</li>
                    )
                })
            }
            </ol>
        </div>
    )
}
export default Jsx_Rules
