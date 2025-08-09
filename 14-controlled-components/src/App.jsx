
import { useState } from 'react'
import './App.css'

function App() {

  const [name, setname]= useState('hitaishi');
  const [password, setpassword]= useState('');
  const [email, setemail]=useState('');
  return(
    <>
    <h1>controlled components</h1>
    <form action="" method='get'>
      <input type='text' value={name} onChange={(event)=>setname(event.target.value)} placeholder='enter name'/>
      <br></br> <br></br>
      <input type='password' value={password} onChange={(event)=>setpassword(event.target.value)} placeholder='enter password'/>
      <br></br> <br></br>
      <input type='email' value={email}  onChange={(event)=>setemail(event.target.value)} placeholder='enter email'/>
      <br></br> <br></br>
      <button>submit</button>

      <button onClick={()=>{setemail('');setname('');setpassword('')}}>clear</button>

      <h3>{name}</h3>
      <h3>{password}</h3>
      <h3>{email}</h3>
    </form> 
    </>
  )
}

export default App
