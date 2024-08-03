const Counter = ()=>{
    let [count, setCount] = React.useState(0)

    return (
        <div>
            <button onClick={()=>setCount((count)=>count-1)}>DEC</button>
            <h2>{count}</h2>
            <button onClick={()=>setCount((count)=>count+1)}>INC</button>
        </div>
    )
}

const Image = ()=>{

    return (
        <div>
            <img src="https://dummyimage.com/400x400/000/fff" />
        </div>
    )

}

const App = ()=>{
    let [toggle , setToggle] = React.useState(true)

    return(
        <div>
            <button onClick={()=>setToggle((toggle)=>!toggle)}>Change Component</button>
            <h2>Code works !</h2>
            {toggle ? <Image/> : <Counter/>}
        </div>
    )
}

let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)


// let a = 10
// let b = 20

// function call(){
//     console.log(a+b)
// }

// console.log(a+b)