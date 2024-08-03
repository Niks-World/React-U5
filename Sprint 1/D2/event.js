const Counter = ()=>{

    let [count , setCount] = React.useState("99")
   // let count = 0

    return (
        <div>
            <button onClick={()=>setCount((count)=>count-1)}>Decrement</button>
            <h2>{count}</h2>
            <button onClick={()=>setCount((count)=>count+1)}>Increment</button>
        </div>
    )
}

// console.log("991" - 1)   error | NaN | "990" | 990

const App = ()=>{
    return (
        <>
        <h2>
            code work
        </h2>
          <Counter/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)


// useState => env => initial CSSMathValue

// React.useState(0)

// [state , stateUpdaterFunction]

// how we use useState ?
// why we use useState ?