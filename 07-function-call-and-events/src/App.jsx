
import './App.css'

function App() {
  function CallFun(){
    alert("function called")
  }

  const Fruit =()=>{
    alert("i am Apple")
  }

  // parameters in function 
  const Fruits=(name)=> {
    alert (name)
  }
  return(
    <>
    <h1> events and function call </h1>
    <button onClick={CallFun}> click me </button>
    <button onClick={Fruit}>Fruit</button>
    <button onClick={()=>Fruits("apple , bananana , strawbeery")}>Eat Fruits </button>
    </>
  )
}

export default App
