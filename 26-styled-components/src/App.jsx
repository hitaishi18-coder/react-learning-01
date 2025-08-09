import styled from 'styled-components'
import './App.css'

function App() {

  // methood 1 

const Heading =styled.h4`
color:red;
border:1px solid green;
border-radius:5px;
margin:20px;
padding:10px
`
const Button=styled.button`
color:blue;
width: 130px;
height:40px;
margin: 20px

`

// const para=styled.p`

// `
  return (
    <>
      <h1>style components</h1>
      <Heading>hello </Heading>
      <Button>login here </Button>
    </>
  )
}

export default App
