
import './App.css'

function App(){
  const username = "hitaishi";
  let x = 390;
  let y = 49;
  return(
    <>
    <h1> JSX in React js</h1>
    <h1>{username}</h1>
    <h1>{1+40+456}</h1>
    <h1>{x+y}</h1>

    <button onClick={()=> alert("hello")}>click me </button>
    </>
  )
}


// react without jsx 

// import { createElement } from 'react';
// function App(){
//   return createElement("div", {id:"rootDiv"}, "hellodiv ")
// }

export default App
