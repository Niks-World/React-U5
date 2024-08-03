const {useState} = React  // its importing 
                                                            // need to put the database name after that .json
let URL = 'https://fir-nik-5ca7d-default-rtdb.asia-southeast1.firebasedatabase.app/PSCusers.json'

const Form = () => {

    // to make dynamic in later that why manginge state
    let [name, setName] = useState("")
    let [description, setDescription ] = useState("")
    let [access, setAccess]= useState(false)


    const handelSubmit =(e) =>{
        e.preventDefault() // to prevent the default 
        // console.log("clicked")
        let obj = {name, description, access}

        axios.post(URL, obj)
        .then((res)=>{
            // to make data empty after posting it 
            fetchData()
            setName('')
            setDescription('')
            setAccess(false)
        })
        .catch((err)=>console.log('err'))
        console.log(obj)
    }

    return (
        <form onSubmit={handelSubmit}>
            <input value={name} 
            placeholder="Name" 
            onChange={(e)=>setName(e.target.value)}
            />
            <input value={description}
             placeholder="Description"
             onChange={(e)=>setDescription(e.target.value)}

              />
            <label>
                Edit Access
                <input checked={access} 
                type="checkbox" 
                onChange={(e)=>setAccess(!access)}

                />
            </label>
            <button type="submit">Add Item</button>

        </form>
    )
}

const ShowData=({fetchData, data})=>{

    const handelUpdate =(id, ele) =>{
        // genrate prompt .
        let nameUpdate = prompt("Enter Updated Name:", ele.name)
        let descUpdate = prompt("Enter new Desc", ele.description)

        let obj = {...ele, name : nameUpdate, description : descUpdate}

        // let obj ={
        //     a: 1,
        //     b: 2,
        //     c:3,
        //     d: 4
        // }
        // console.log(obj)

        axios.patch(`https://fir-nik-5ca7d-default-rtdb.asia-southeast1.firebasedatabase.app/PSCusers/${id}.json`, obj)
        .then(()=>{
            alert(`item named: ${ele.name} is updated with ${nameUpdate}, in the DataBase`)
        })

    }
    // deleting the data from data base 
    const handelDelete =(id)=>{
        axios.delete(`https://fir-nik-5ca7d-default-rtdb.asia-southeast1.firebasedatabase.app/PSCusers/${id}.json`)
        .then(()=>{
            alert(`item id :${id}: is delete from the DB`)
            fetchData()
    })
        .catch((err)=>console.log(err))
    }

    return (
        <>
            <div>
                {
                    Object.entries(data).map(([key,ele] )=>{
                        return (
                            <div key={key}>
                            <p><b>Name :</b> {ele.name}</p>
                            <p><b>Description :</b> {ele.description}</p>
                            {
                                ele.access ? (
                                    <div>
                                    <button onClick={()=> handelUpdate(key, ele)}>Update Data</button>
                                    <button onClick={()=> handelDelete(key)}>Delete</button>

                                    </div>
                                ):
                                (<h3> Viwe Access Only</h3>)
                            }
                            </div>
                        )
                    })
                }
            </div>       
        </>
    )
}

//[[key value], [key, value]..
// let [ key , value ] =ele

const App = () => {

    let [data, setData] = useState({})
    let [loader, setLoader] = useState(true)
    let [flag, setFlag] = useState(false)

    const fetchData =()=>{
        axios.get(URL)
        .then((res)=>{
            // console.log(res)
            setData(res.data)
            setLoader(false)
        })
        .catch((err)=>console.log('err'))
    }

    if(!flag){
        fetchData()
        setFlag(true)
    }
   

    return (
        <>
           
            <Form fetchData={fetchData} />
            {loader ? <h2>Loading ...... </h2> : <ShowData fetchData={fetchData} data={data}/>}
           
        </>
    )
}

let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)
