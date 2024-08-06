import axios from "axios"
import { useState , useEffect} from "react"

export const ShowData =() =>{

    let URL = `https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10`

    let [data , setData] = useState([])
    let [page, setpage] = useState(1)

    const getData = () =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
        .then((res)=>{
            setData(res.data)
            // console.log(res.data)
        })
        .catch((error)=> console.log(error))
    }

    // useEffect(cb func , dependancy(array) || useEffect()=>{}, [])

    useEffect(()=>{
        getData()
    }, [page])
    
    return (
        <>
        <div>
            <button onClick={()=>setpage(page-1)} disabled={page == 1}>prev</button>
            <h2>{page}</h2>
            <button onClick={()=>setpage(page+1)}>next</button>
        </div>
            <div>{
                 data.map((ele) =>{
                    return (
                        <div key={ele.id}>
                            <p><b>{ele.id}. Title :</b> {ele.title}</p>
                        </div>
                    )
                 })
            }
            </div>
        </>
    )
}


// name exoprt => mulitple