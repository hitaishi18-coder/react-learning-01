import { useState } from "react"

function App() {

  const [cardStyle, setcardstyle] = useState(
    {
      border: "1px solid #cccccc3b",
      width: "200px",
      boxShadow: "1px 2px 3px 0px #cccccc3b",
      color: "black"
    }
  )

  const [textColor, setTextcolor] = useState('black')

  const [grid, setgrid]=useState(true)

  const updateTheme = (bgColor, textColor) => {
    console.log(bgColor, textColor)
    setcardstyle({ ...cardStyle, backgroundColor: bgColor, color: textColor })
    setTextcolor(textColor)
  }

  return (
    <>
      <h1 style={{ color: 'green' }}> inline css in react js </h1>
      <button onClick={() => updateTheme('grey', 'yellow')}> grey theme </button>
      <button onClick={() => updateTheme('white', 'black')}> default theme </button>
      <button onClick={()=>setgrid(!grid)}>  toggle switch</button>
      <div style={{ display: grid?'flex':'block', flexWrap: "wrap" }} >
        <div style={cardStyle}>
          <img style={{ width: "200px" }} src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg"></img>
          <div style={{ padding: "5px", margin: "10px", color: textColor }}>
            <h2>hitaishi lohtia </h2>
            <h3> developer </h3>
          </div>
        </div>

        <div style={cardStyle}>
          <img style={{ width: "200px" }} src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg"></img>
          <div style={{ padding: "5px", margin: "10px", color: textColor }}>
            <h2>hitaishi lohtia </h2>
            <h3> developer </h3>
          </div>
        </div>

        <div style={cardStyle}>
          <img style={{ width: "200px" }} src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg"></img>
          <div style={{ padding: "5px", margin: "10px", color: textColor }}>
            <h2>hitaishi lohtia </h2>
            <h3> developer </h3>
          </div>
        </div>

        <div style={cardStyle}>
          <img style={{ width: "200px" }} src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg"></img>
          <div style={{ padding: "5px", margin: "10px", color: textColor }}>
            <h2>hitaishi lohtia </h2>
            <h3> developer </h3>
          </div>
        </div>

        <div style={cardStyle}>
          <img style={{ width: "200px" }} src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg"></img>
          <div style={{ padding: "5px", margin: "10px", color: textColor }}>
            <h2>hitaishi lohtia </h2>
            <h3> developer </h3>
          </div>
        </div>

        <div style={cardStyle}>
          <img style={{ width: "200px" }} src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg"></img>
          <div style={{ padding: "5px", margin: "10px", color: textColor }}>
            <h2>hitaishi lohtia </h2>
            <h3> developer </h3>
          </div>
        </div>


        <div style={cardStyle}>
          <img style={{ width: "200px" }} src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg"></img>
          <div style={{ padding: "5px", margin: "10px", color: textColor }}>
            <h2>hitaishi lohtia </h2>
            <h3> developer </h3>
          </div>
        </div>

        <div style={cardStyle}>
          <img style={{ width: "200px" }} src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg"></img>
          <div style={{ padding: "5px", margin: "10px", color: textColor }}>
            <h2>hitaishi lohtia </h2>
            <h3> developer </h3>
          </div>
        </div>

        <div style={cardStyle}>
          <img style={{ width: "200px" }} src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg"></img>
          <div style={{ padding: "5px", margin: "10px", color: textColor }}>
            <h2>hitaishi lohtia </h2>
            <h3> developer </h3>
          </div>
        </div>

        <div style={cardStyle}>
          <img style={{ width: "200px" }} src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg"></img>
          <div style={{ padding: "5px", margin: "10px", color: textColor }}>
            <h2>hitaishi lohtia </h2>
            <h3> developer </h3>
          </div>
        </div>


        <div style={cardStyle}>
          <img style={{ width: "200px" }} src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg"></img>
          <div style={{ padding: "5px", margin: "10px", color: textColor }}>
            <h2>hitaishi lohtia </h2>
            <h3> developer </h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
