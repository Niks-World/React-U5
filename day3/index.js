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

  return(
    <div>
        <img src="https://www.bing.com/th?id=OIP.qDvAlhidTBzXiGyDfq_O0gHaE7&w=167&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="anyImage"/>
    </div>
  )
  }
  
  const App = ()=>{
    let [toggle, setToggle] = React.useState(true)
    return(
        <>
        <div>
        <button onClick={()=>setToggle(!toggle)}>Toggle Themes</button>
        {
                toggle ? <Counter/>: <Image/>
            }
        </div>
        </>
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