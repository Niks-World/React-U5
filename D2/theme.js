const DarkMode = ()=>{
    return (
        <div style={{backgroundColor:"black" , padding:"40px" , color:"white" }}>
            <h2>Hello world</h2>
        </div>
    )
}

const LightMode = ()=>{
    return (
        <div style={{backgroundColor:"rgb(163, 163, 205)" , padding:"40px" , color:"midnightblue" }}>
            <h2>Hello world</h2>
        </div>
    )
}
const App = ()=>{
    let [toggle , setToggle] = React.useState(true)
    return (
        <>
        <button onClick={()=>setToggle((toggle)=>!toggle)} >Toggle Themes</button>
         {
            toggle ? <LightMode/> : <DarkMode/>
         }
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)