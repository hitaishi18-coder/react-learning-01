import React from 'react'

export default function Wrapper({children, color}) {
  return (
    <div style={{color:color, border:"5px solid brown", width:"200px", margin:"10px"}}>
    {children}
    </div>
  )
}
