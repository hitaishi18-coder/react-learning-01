import { useState } from "react"

const Counter=()=>{
    const [Count,SetCount] = useState(0)
    const [Rcounter, SetRcounter]= useState(10)
    return(
        <>
        <h1>Counter: {Count}</h1>
        <h2>Reverse Counter: {Rcounter}</h2>
        <button onClick={()=>SetCount(Count+1)}>update counter</button>
        <button onClick={()=>SetRcounter(Rcounter-1)}> Reverse Counter</button>
        </>
    )
}
export default Counter