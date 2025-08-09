import User from './User'
import Array from './Array'
import './App.css'
import Student from './Click'
import { useState } from 'react'

function App() {
  // let UserName="hitaishi lohtia";
  // let age=22;
  // let email = "abc@gmail.com";




  // objects 
  let UserObject={
    name: "hitaishi",
    age: 22,
    email: "abc@test.com"
  }


  let UserObject2={
    name:"peter",
    age:23,
    email: "peter@gmail.com"
  }

  let UserObject3={
    name:"rohaz",
    age:23,
    email: "rohaz@gmail.com"
  }


  // arrays 
  let names=['iet','iit','du','gndu']

  const [STudent, SetStudent]= useState("sam")
  return(
    <>
  
    <Array name={names}/>


    <h1> Objects in Props in React js </h1>
    {/* <User name="hitaishi lohtia" age="22"/> */}
    {/* <User name={UserName} age={age} email={email}/> */}
     
     <User user={UserObject}/>
     <User user={UserObject2}/>
     <User user={UserObject3}/>

     <Student name={STudent}/>
     <button onClick={()=>SetStudent("hitaishi")}>update student name</button>
    </>
  )
}

export default App
