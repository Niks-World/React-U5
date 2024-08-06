export const Counter = ({count , setCount}) => {
    return (
        <>

        <div>
         <button onClick={()=>setCount(count -1)}>DEc</button>
         <input value={count} />
         <button onClick={()=>setCount(count+1)}>Inc</button>
 
        </div>
     </>
    )
}

