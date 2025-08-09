// function User(props)

function User({user})
{

    // function User({name, age})
  
    return(
        <>
        <hr></hr>
        <h2>User component </h2>
        <p>name: {user.name}</p> 
         <p>age: {user.age}</p>
          <p>email: {user.email}</p>
       
         {/* <h3>{props.name} </h3>
         <h3>{props.age}</h3> */}
        </>
    )
}

export default User;