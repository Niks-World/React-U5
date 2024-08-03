const {createRoot} =ReactDOM
const {useStae} = React


const FetchData = () =>{
   
    let [dataArr, setDataArr] = useSate([])


    const handelClick = async () =>{
        let res = await fetch("https://jsonplaceholder.typicode.com/posts")
        console.log(res)
        let data = await res.json()

        setDataArr(data)
    }
    handelClick()
    // when page loaded its show the fetch data 
    // this is not good practice 
return (
    <>
        <div>
            <button onClick={handelClick}>Feych DATa </button>
            <div>
              
                <ol>
                    {
                        dataArr.map((ele, i) =>{
                            return (
                                <li key={i}>{ele.title}</li>
                            )
                        })
                    }
                </ol>
              
            </div>
        </div>
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