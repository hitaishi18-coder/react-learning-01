
import './App.css'
import College from './College';

function App() {

  const collegeData=[
    {
      name: "IET delhi",
      city: "delhi",
      website: "abc@gmail.com",
      student:[
        {
          name: "hitaishi lohtia ",
          age: "22",
          email:"hitaishi@gmail.com"
        }
      ]
    },
    {
      name:"IIT banglore",
      city: "banglore",
      website: "abc@gmail.com",
      student:[
          {
          name: "disha",
          age: "22",
          email:"disha@gmail.com"
        }
      ]
    
    },
    {
      name: "KCIET nisar",
      city: "nisar",
      website: "abc@gmail.com",
      student: [
            {
          name: "peter",
          age: "22",
          email:"peter@gmail.com"
        }

      ]
    }
  ]

  return (
    <>
      <h1>nested looping</h1>
    {
collegeData.map((college, index) => {
  return (
    <div key={index}>
  <College college= {college}/>
    </div>
  );
})

    }
    </>
  )
}

export default App
