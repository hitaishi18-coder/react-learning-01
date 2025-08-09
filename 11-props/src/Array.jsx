function Array({name}){
    // console.log(props)
    return(
        <>
        <h1> Array in props</h1>
        <p>{name[0]}</p>
        <p>{name[1]}</p>
        <p>{name[2]}</p>
        <p>{name[3]}</p>
        </>
    )
}

export default Array;