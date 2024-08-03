const {createRoot} =ReactDOM
const {useState} = React


const FetchData = () =>{


    const handelClick = async () =>{
       axios.get("https://fir-nik-5ca7d-default-rtdb.asia-southeast1.firebasedatabase.app/user.json")
       .then((res) =>{
        console.log(res.data)
       })
    }
return (
    <>

            <button onClick={handelClick}>FeTch DATA </button>
     
    </>
)
}

const App = () =>{
    return (
        <>
            <FetchData />            
        </>
    )
}

let root = createRoot(document.getElementById("root"))
root.render(<App />)



/// axios. patch 

// axios.put 