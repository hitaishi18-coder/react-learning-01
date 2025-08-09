
import { useState } from 'react'
import './App.css'
import Counter from './Counter'

function App() {
 const [count,setcount]= useState(0)
 const [data,setdata]= useState(0)
 const [display,setdisplay]= useState(true)


 return(
  <>
  <h1>life cycle in useEffect hook</h1>
 {
  display ? <Counter count={count} data={data} /> : null
}


  <button onClick={()=>setcount(count+1)}>counter</button>
  <button onClick={()=>setdata(data+1)}>data</button>
  <button onClick={()=>setdisplay(!display)}>toggle </button>
  </>
 )
}

export default App
