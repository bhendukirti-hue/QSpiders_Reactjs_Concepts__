// String , array , number , boolean , object all valuee we can access the jsx expression
const Jsx_Task=()=>{
    let name="kirti";
    let age=20
    if(false){
        console.log("true block");
    }
    else{
        console.log("false block");
    }
    let theme=true
    let arr=["kirti","pritti","sruti","kiti","Jyoti","liti","Shristi"]
    let family={    
        mothername:"Shayamala",
        fathername:"krishnamurty",
        brothername:"kishan",
        sistername:"kirti"
    }
    return(
        <div>
            <h1>Hello {name}</h1>
            <h2>age {age}</h2>
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
            <h3>Family Members</h3>
            <h3>Fathers name{family.fathername}</h3>
            <h3>Mothers name{family.mothername}</h3>
            <h3>Brothers name{family.brothername}</h3>
            <h3>Sister name{family.sistername}</h3>
        </div>
    )
}
export default Jsx_Task