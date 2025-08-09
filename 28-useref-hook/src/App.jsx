import './App.css'
import { useRef } from 'react'

function App() {

  const inputRef = useRef(null)

  const inputHandler = () => {
    console.log(inputRef)
    inputRef.current.focus();
      inputRef.current.style.color='green'
        inputRef.current.placeholder='enter name'
        inputRef.current.value='123'

  }

  const togglehandler = () => {
  if(  inputRef.current.style.display!='none') {
      inputRef.current.style.display='none'
  } else {
      inputRef.current.style.display='inline'
  }
  }

  const h1Ref=useRef(null)
  const h1Handler=()=>{
    h1Ref.current.style.color='green'
  }

  return (
    <>
      <h1>useRef hook</h1>
      <input ref={inputRef} type='text' placeholder='enter your name'></input>
      <button onClick={inputHandler}>focus on input field</button>


      <button onClick={togglehandler}> toggle </button>

      <h1 ref={h1Ref}>hitaishi</h1>
      <button onClick={h1Handler}> h1 handler </button>
    </>
  )
}

export default App


// we are manipulatind dom here so it is not recommended 
