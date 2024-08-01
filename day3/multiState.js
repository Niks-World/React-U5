
const App = ()=>{


    let {useState} = React

    let [title , setTitle] = useState("")
    let [age , setAge] = useState(0)
    let [married , setMarried] = useState(false) 

    let [Submit, setSubmit] = React.useState(true)

    console.log(title , age , married)
    return(
        <div>
            <h2>Code works !</h2>
            <input placeholder="title" />
            <input placeholder="age" />
            <select>
                <option>Married</option>
                <option>Yes</option>
                <option>No</option>
            </select>
            <button onClick={()=>setSubmit(!Submit)}>Submit</button>
        </div>
    )
}

let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)