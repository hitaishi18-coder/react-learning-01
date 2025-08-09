
import { useState } from 'react'
import './App.css'

function App() {

  const [gender,setgender]=useState('female');
  const [city, setcity]=useState('delhi')
  

  return (       
    <>
    <h1>handle radio and dropdown</h1>
    <h4> select gender </h4>      
    <input type="radio" onChange={(event)=>setgender(event.target.value)} name="gender" value="male" id='male' checked={gender =="male"} /> 
    <label htmlfor="male" >male</label>
    <input type="radio" onChange={(event)=>setgender(event.target.value)} name="gender"value="female" id='female'checked={gender =="female"}/>
     <label htmlfor="female" >female</label>
     <h2> selected gender : {gender}</h2>
     <br></br> <br></br> <br></br>


     <h4> select city </h4>
     <select onChange={(event)=>setcity(event.target.value)} defaultValue={"delhi"}>
      <option value="noida"> noida </option>
      <option value="mumbai"> mumbai</option>
      <option value="delhi"> delhi </option>
     </select>

     <h2>selected city :   {city}</h2>
     </>
  )
}

export default App

