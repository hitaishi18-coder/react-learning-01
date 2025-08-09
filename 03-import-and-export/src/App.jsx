import Login , {Profile, Setting, userKey} from "./UserComponents";
function App(){
  return(
    <>
    <h1> importing and exporting components</h1>
    <Login/>
    <Profile/>
    <Setting/>
    <h1> {userKey} </h1>
    </>
  )
}

export default App;  //  bhejna 