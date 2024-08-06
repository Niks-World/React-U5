import { useState } from 'react'

import { Counter } from './componet/Counter'
import {Arr} from './componet/arr'
import { ShowData } from './componet/ShowData'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

       {/* <div>
        <button onClick={()=>setCount(count -1)}>DEc</button>
        <input value={count} />
        <button onClick={()=>setCount(count+1)}>Inc</button>

       </div> */}
       < Counter count={count} setCount={setCount} />
       <Arr />
       < ShowData />
    </>
  )
}

export default App
