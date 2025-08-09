import './App.css'
import User from './User'


function App() {


  const userData=[
    {
      name: "hitaishi",
      age: '23',
      email: "hitaishi@test.com",
      id: 1
    },

    {
      name: "peter",
      age:'20',
      email: "peter@gmail.com",
      id: 2
    },
    {
      name: "disha",
      age: '20',
      email: "disha@gmail.com",
      id:3
    },
    {
      name: "lovish",
      age: '23',
      email: "lovish@gmail.com",
      id:4
    }

  ]

 
return(
<>
<h1>
  loops in jsx with map function 
</h1>

{
   userData.map((user) => (
    <div key={user.id}>
      <User data={user}/>
      </div>
))

}
</>
)
}

  


export default App