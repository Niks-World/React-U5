import axios from "axios"
import { useState , useEffect} from "react"

export const ShowData =() =>{

    let URL = `https://jsonplaceholder.typicode.com/posts`

    let [data , setData] = useState([])

    const getData = () =>{
        axios.get(URL)
        .then((res)=>{
            setData(res.data)
            console.log(res.data)
        })
        .catch((error)=> console.log(error))
    }

    // useEffect(cb func , dependancy(array) || useEffect()=>{}, [])

    useEffect(()=>{
        getData()
    }, [])
    
    return (
        <>
            <div>

            </div>
        </>
    )
}


// name exoprt => mulitple