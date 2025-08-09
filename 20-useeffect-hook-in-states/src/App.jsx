
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);


  useEffect(() => {
    callOnce(); // called only once on
    counterFunction()
  }, [counter]);

  function counterFunction(){
    console.log("counterFunction", counter)
  }
  function callOnce() {
    console.log("callOnce function called");
  }

  return (
    <>
      <h1>useEffect hook</h1>
      <button onClick={() => setCounter(counter + 1)}>
        Counter: {counter}
         {/* har baar click hone pe function call ho reha hai  */}

         {/* so we use useEffect hook to run it only once  */}
      </button>
    </>
  );
}

export default App;
