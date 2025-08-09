import React, { useState } from 'react'


export default function Skills() {
    const [skills, setskills]=useState([]);

    const handleSkills=(event)=>{
        console.log(event.target.value , event.target.checked);

        if(event.target.checked){
            setskills([...skills,event.target.value])  
            // if check ....
            // spread operator for multiple values  
            // , event.target.value ..... jo values aayi hai woh  

        } else {
            setskills([...skills.filter((item)=>item!=event.target.value)])
            // if unchecked 
            // uncheck wali ko hata k baki dal do  
        }
    }
  return (
    <div>
        <h3>select your skills</h3>
        <input type="checkbox" onChange={handleSkills} id="php" value="php"/>
        <label htmlFor='php'>php</label>
        <br></br> <br></br>
         <input type="checkbox" onChange={handleSkills} id="react" value="react"/>
        <label htmlFor='react'>react</label>
        <br></br> <br></br>
         <input type="checkbox" onChange={handleSkills} id="js" value="js"/>
        <label htmlFor='js'>js</label>
        <br></br> <br></br>
         <input type="checkbox" onChange={handleSkills} id="node" value="node"/>
        <label htmlFor='node'>node</label>
          <h1>{skills.toString()}</h1>
    </div>
  
  )
}
