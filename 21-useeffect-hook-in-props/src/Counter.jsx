import { useEffect } from "react";

const Counter=({count , data})=>{
      const handleCounter=()=>{
    console.log("handle counter called ")
  }

  useEffect(()=>{
     handleCounter();  //call once 
 
  },[count])

  useEffect(()=>{
     handleData();
  },[data])

//     useEffect(()=>{
//      handleData();
//   },[data,count])


  const handleData = ()=>{
    console.log("haandle data called ")
  }
    return(
        <>
        <h1>counter value {count}</h1>
        
        <h1>data value {data}</h1>
        </>
    )
}

export default Counter