
import './App.css'
import User from './User'
import Wrapper from './Wrapper'

function App() {
  return(
    <>
    <h1> Advanvce props </h1>
    {/* <User name="hitaishi"/>
    <User/>
    <User name="rohaz"/>
    </> */}

    <Wrapper color="orange">
        <h4>hello everyone</h4> 
        {/* // h4 ko render krane k liye props dena pdega children wraapper ko  */}
    </Wrapper>

     <Wrapper>
        <h4>hi hitaishi here </h4> 
        {/* // h4 ko render krane k liye props dena pdega children wraapper ko  */}
    </Wrapper>

    <Wrapper>
        <h4>hi good morning  </h4> 
        <h3 style={{color: "red"}}> please login</h3>
        {/* // h4 ko render krane k liye props dena pdega children wraapper ko  */}
    </Wrapper>
    </>
  )
}

export default App
