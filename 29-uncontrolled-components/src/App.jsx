
import { useRef } from 'react';
import './App.css'

function App() {


  const userRef = useRef();
  const passwordRef = useRef();
  const handleForm=(event)=>{
    event.preventDefault();
    const user = document.querySelectorAll("#user").value
    const pass = document.querySelectorAll("#password").value

    console.log(user)
    console.log(pass)
  }

  const handleFormRef=(event)=>{
    const user = userRef.current.value
    const pass = userRef.current.value 
    event.preventDefault();

    console.log(user)
    console.log(pass)

  }

  return (
    <>
      <h1>uncontrollled components </h1>
      <form action="" method=''onSubmit={handleForm}>
        <input type='text' id="user"placeholder='enter user name'></input>
        <br></br>
          <input type='password' id="password" placeholder='enter user password'></input>
        <br></br>
        <button>submit</button>
      </form>
      <hr>
      </hr>

    <h1>uncontrolled component with useRef</h1>
      <form action="" method=''onSubmit={handleFormRef}>
        <input type='text' ref={userRef} id="userRef"placeholder='enter user name'></input>
        <br></br>
          <input type='passwordRef'ref={passwordRef} id="password" placeholder='enter user password'></input>
        <br></br>
        <button>submit Ref</button>
      </form>
    </>
  )
}

export default App
