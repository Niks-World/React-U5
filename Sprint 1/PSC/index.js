const {useState} = React

let URL = 'https://fir-mk-1-default-rtdb.asia-southeast1.firebasedatabase.app/PSCusers.json'

const Form = ({fetchData})=>{

    let [name , setName] = useState('')
    let [description , setDescription] = useState('')
    let [access , setAccess] = useState(false)

    const handleSubmit = (e)=>{
       e.preventDefault()
       let obj = {name , description , access}

       axios.post(URL , obj)
       .then(()=>{
        fetchData()
        setName('')
        setDescription('')
        setAccess(false)
       })
       .catch((err)=>console.log("err"))

       console.log(obj)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={name} 
                   placeholder="Name"
                   onChange={(e)=>setName(e.target.value)}
                    />
            <input value={description}
                   placeholder="description"
                   onChange={(e)=>setDescription(e.target.value)}
                   />
            <label>
               Edit Access 
            <input checked={access}
                   type="checkbox" 
                   onChange={(e)=>setAccess(!access)}
                   />
            </label>
            <button type="submit" >Add Item</button>
        </form>
    )
}

const ShowData = ({fetchData , data})=>{

    const handleUpdate = (id , ele)=>{
            let nameUpdate = prompt("Enter updated Name : " , ele.name)
            let descUpdate = prompt("Enter new Desc" , ele.description)

            let obj = {...ele , name : nameUpdate , description : descUpdate}

            // let obj = {
            //     a:1 , 
            //     b:2 , 
            //     a:3 , 
            //     b:4
            // }

            // console.log(obj)
        
            axios.patch(`https://fir-mk-1-default-rtdb.asia-southeast1.firebasedatabase.app/PSCusers/${id}.json` , obj )
            .then(()=>{
                alert(`item named : ${ele.name} is updated with ${nameUpdate} , in the DB`)
                fetchData()
            })
            .catch((err)=>console.log(err))
    }

    const handleDelete = (id)=>{
        axios.delete(`https://fir-mk-1-default-rtdb.asia-southeast1.firebasedatabase.app/PSCusers/${id}.json`)
        .then(()=>{
            alert(`item id : ${id} : is delete from the DB`)
            fetchData()
        })
        .catch((err)=>console.log(err))
    }

    return(<>
       <div>
          {
            Object.entries(data).map(([key , ele])=>{
                   return (
                    <div key={key}>
                        <p><b>Name : </b> {ele.name} </p>
                        <p><b>description : </b> {ele.description}</p>
                        {
                            ele.access ? (
                                <div>
                                    <button onClick={()=>handleUpdate(key , ele)}>Update Data</button>
                                    <button onClick={()=>handleDelete(key)}>Delete Data</button>
                                </div>
                            ) :
                             (<h3>View Access only</h3>)
                        }
                    </div> 
                   )
            })
          }
       </div>
    </>)
}
// {{}} => [[]]
// [[key , value] , [key , value ]]
// let [key , value] = ele
// [key , value] = ele

const App = ()=>{
    let [data , setData] = useState({})
    let [loader , setLoader] = useState(true)
    let [flag , setFlag ] = useState(false)

    const fetchData = ()=>{
        axios.get(URL)
        .then((res)=>{
            setData(res.data)
            setLoader(false)
            // [{}]
            // {{}}
        })
        .catch((err)=>console.log("err"))
    }

    if(!flag){
        fetchData()
        setFlag(true)
    }
    

    return (
        <>
        <Form fetchData={fetchData} />
        {loader ? <h2>Loading ...</h2> : <ShowData fetchData={fetchData} data={data} /> }
        </>
    )
}

let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)