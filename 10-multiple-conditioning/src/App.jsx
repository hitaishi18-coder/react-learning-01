
import './App.css'
import { useState } from 'react'

function App() {
  const [Count, SetCount] = useState(0)
  return(
   <>
   <h1>multiple condition in react js </h1>
   <h2>{Count}</h2>
   <button onClick={()=>SetCount(Count+1)}>Counter</button>
   {
    Count==0?<h3>Condition 0</h3>
    :Count==1?<h3>condition 1</h3>
     :Count==2?<h3>condition 2</h3>
      :Count==3?<h3>condition 3</h3>
       :Count==4?<h3>condition 4</h3>
        :Count==5?<h3>condition 5</h3>
    : <h3>other conditions </h3>
   }
   </>
  )
  
}

export default App
