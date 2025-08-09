
import { useState } from 'react';
import './App.css'
import Counter from './Counter';

function App() {

  const[count,setcount]=useState(0)
  const[data,setdata]=useState(0);

  return(
    <>
    <h1>handle props side effect with useeffect in components</h1>
    <Counter count={count} data={data}/>
    <button onClick={()=>setcount(count+1)}>Counter</button>
    <button onClick={()=>setdata(data+1)}>datas</button>
    </>

  )
}

export default App
