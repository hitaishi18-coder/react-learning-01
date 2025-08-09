
import './App.css'


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
<h3>dummy data </h3>
<table border="2">
  <thead>
    <tr>
    <td>id</td>
    <td>name</td>
    <td>age</td>
    <td>email</td>
    </tr>
    </thead>
    <tbody>
{
   userData.map((user) => (
  <tr key={user.id}> 
  {/* //key bcoz of unique id  */}
    <td>{user.id}</td>
    <td>{user.name}</td>
    <td>{user.age}</td>
    <td>{user.email}</td>
  </tr>
))

}

    </tbody>
</table>
</>
)

  
}

export default App
