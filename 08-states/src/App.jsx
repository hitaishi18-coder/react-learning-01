import { useState, UseState  } from 'react'
import Counter from './Counter'
import './App.css'


function App(){
  const [Fruit, SetFruit] = useState("apple")  //  destructuring
  // const [Count, SetCount] = useState(" ")
  const HandleFruit=()=>{
    SetFruit("strawberry")
  }

  return(
    <>
    <h1>State in React js </h1>
    <h1>{Fruit}</h1>
    <button onClick={HandleFruit}>Change fruit name </button>
    <Counter/>
    </>
  )
}




export default App;










































// function App() {

//   let Fruit = "apple"

//   const HandleFruit=()=>{
//     Fruit= "banana "
//     console.log(Fruit)
//   }
//   return(
//     <>
//     <h1> States in React Js</h1>
//     <h2>{Fruit}</h2>
//     <button onClick={HandleFruit}> change fruit name</button> 
//     {/* // we cant the change the fruit name from apple to bnanana */}

//     {/* // for this we have concept of states  */}
//     </>
//   )
// }
// export default App