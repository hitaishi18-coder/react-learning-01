import { useState } from 'react'
import User from './user'
import './App.css'

function App() {
  const [Display, SetDisplay] = useState(true)
  return(
    <>
    <h1>Toggle in React</h1>
    {/* {
      Display?<h1>hitaishi</h1>:null 
    } */}


   {
    Display? <User/>: null
   }


    <button onClick={()=>SetDisplay(!Display)}> Toggle</button>
    {/* true hai to false ho jayega  */}
   </>
  )
  }



export default App
