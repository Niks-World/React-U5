let {useState} = React

const AddData = ({ setShareData})=>{

    

    let [title , setTitle] = useState("")
    let [age , setAge] = useState(0)
    let [married , setMarried] = useState(false) 

    let [dataset , setDataset] = useState(JSON.parse(localStorage.getItem("data")) || [])

    

    const handleClick = ()=>{
         let obj = {title , age , married}
         
         setDataset((dataset)=>[...dataset  , obj])
         localStorage.setItem("data" , JSON.stringify([...dataset  , obj]))
         setShareData((dataset)=>[...dataset  , obj])
    }
    // console.log(dataset)

    return(
        <div>
            <h2>Code works !</h2>
            <input onInput={(e)=>setTitle(e.target.value)} placeholder="title" />
            <input onInput={(e)=>setAge(e.target.value)} placeholder="age" />
            <select onChange={(e)=>setMarried(e.target.value)}>
                <option value="false">Married</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select>
            <button onClick={handleClick}>Submit</button>
        </div>
    )
}

const ShowData = ({shareData})=>{
    console.log("sharedData" , shareData)
    return (
        <div>
            {
                shareData.map((ele)=>{
                    return (
                        <div>
                            <h2>{ele.title}</h2>
                            <h2>{ele.married == "true" ? "married" : "not married"}</h2>
                        </div>    
                    )
                })
            }
        </div>
    )
}

const App = ()=>{

    let [shareData , setShareData] = useState(JSON.parse(localStorage.getItem("data")) || [])

  return (
    <>
    <AddData setShareData={setShareData}/>  
    <ShowData shareData={shareData} />  
    </>
  )
}

let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)

// .darkMode{
//     background-color : Black;
// }

// .lightMode{
//     background-color : lightBlue ; 
// }

// toggle => true | false

// <tag placeholder="Input of title" className={toggle ? true : flase} ></tag>
// <tag className=false ></tag>


// onInput  || onChange 



// function submit(event){
//     event.preventDefault()

//     let title = event.target[0].value
// }