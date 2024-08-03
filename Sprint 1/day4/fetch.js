const {createRoot} =ReactDOM
const {useState} = React


const FetchData = () =>{
    // function handelClick(){}
    // }
    let [dataArr, setDataArr] = useState([])
    let [flag, setFlag] = useState(true)


    const handelClick = async () =>{
        let res = await fetch("https://jsonplaceholder.typicode.com/posts")
        // console.log(res)
        let data = await res.json()

        setDataArr(data)
    }
    // res => readbleStream  => Json => itreable data
return (
    <>
        <div>
            <button onClick={handelClick}>Feych DATa </button>
            <div>
              {
                flag ? <h2>No data , please click on Fetch data </h2>
                :  <ol>
                    {
                        dataArr.map((ele) =>{
                            return (
                                <li>{ele.title}</li>
                            )
                        })
                    }
                </ol>
              }
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