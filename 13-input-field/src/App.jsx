import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState("hitaishi")

  return (
    <>
      <h1>Get input field value</h1>
      <input
        type='text' value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder='Enter your name'
      />
      <h3>{value}</h3>
      <button onClick={()=>setValue("")}>clear value </button>
    </>
  )
}

export default App
