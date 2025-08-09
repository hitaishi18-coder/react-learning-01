import React from 'react'

export default function User({displayName, name, getuser}) {

  return (
  <>
  <button onClick={()=>displayName(name)}>display name</button>
    <button onClick={()=>getuser()}>get user </button>
  </>
  )
}
