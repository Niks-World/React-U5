
const Counter = () =>{
    // let count = 0;

    let [count, setCount] = React.useState(0)
    function handelClick(num){

       setCount((count)=>  count + num)
        // console.log(count)

    }
    return (
        <div>
            <button onClick={()=>handelClick(-1)}>Decremnet</button>
            <h2>{count}</h2>
            <button onClick={()=>handelClick(1)}>Incerment</button>
        </div>
    )
}


const App =() => {
    return (
        <>
        <Counter/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)