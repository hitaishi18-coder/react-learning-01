
import './App.css'

function App() {

  // variables
  const name="Hitaishi lohtia"
  const name2 = "Rohaz Bhalla"
  // const name2 = undefined


  // objects
  const UserObj={
    name:"abc",
    email: "abc@gmail.com",
    age: 23
  }

  // array 
  const UserArray = ['sam','mam','peter']
  let x=10;
  let y=80;

  //images 

  let Path="https://images.unsplash.com/photo-1611003228941-98852ba62227?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D"


  function Fruit(){
    return "Apple"
  }

  // operator
  function Sum(a,b){
    return a+b
  }
function Operation(a,b,op){

  //if else 
  if(op=="+"){
        return a+b;
  } else if(op=="-"){
    return a-b
  } else {
    return a*b
  }

}

  return(
    <>
    <h1>JSX with curly braces</h1>
    <h2>{name}</h2>
    <h3>{name2?name2:"user not found"}</h3>
    <p>{x+y}</p>
    <p>{Fruit()}</p>
    <p>{Sum(10,100)}</p>
    <p>{Operation(20,10,"+")}</p>
    <p>{Operation(20,10,"-")}</p>
    <p>{UserObj.email}</p>
    <p>{UserObj.name}</p>
    <h1>{UserArray[0]}</h1>
    <input type="text" value={name} />
    <br></br>
    <img
    src={Path} height={400} width={400}
    />
    
    </>
  )
}

export default App
