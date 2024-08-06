import { useEffect } from "react"

export const Counter = ({count , setCount}) => {
   
        
        useEffect(() =>{
            let intervalID = setInterval(()=>{
                console.log(count)
            }, 1000)

            return ()=> clearInterval(intervalID); // cleanup function 
        }, [count])
        
        return (
        <div>
         <button onClick={()=>setCount(count -1)}>DEc</button>
         <input value={count} />
         <button onClick={()=>setCount(count+1)}>Inc</button>
 
        </div>
    
    )
}

