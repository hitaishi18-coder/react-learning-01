
import './App.css'
import User from './User'

function App() {

  const displayName=(name)=> {
    alert(name)
  }

  const getUser=()=>{
    alert("get user called ")
  }
    return (
    <>
      <h1>call parent component from child component</h1>
      <User displayName={displayName} name="hitaishi" getuser={getUser}/>
      <User displayName={displayName} name="abc"getuser={getUser} />
      <User displayName={displayName} name="def" getuser={getUser}/>
      <User displayName={displayName} name="xyz" getuser={getUser}/>
    </>
  )
}

export default App
