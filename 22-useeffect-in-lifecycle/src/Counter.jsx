import { useEffect } from "react"


const Counter = ({ count, data }) => {


    useEffect(()=>{
        console.log("mounting phase only")
    },[])

    useEffect(()=> {
        console.log("update phase only ")
    },[count])

    useEffect(()=>{
        return()=>{
            console.log("unmount phase only ")
        }
    },[])
    return(
        <>
        <h1>counter value {count}</h1>
        <h1>data value {data}</h1>
        </>
    )
}
export default Counter