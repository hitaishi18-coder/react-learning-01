function Todo(){
    function callFun(){
        alert("function called ")
    }
    return(
        <>
        <h1> hello TODO component </h1>
         
        <ul>
            <li>invent new traffic lights</li>
            <li>reherase a movie scene</li>
            <li>improve the spectrum technology </li>
        </ul>
        <button onClick={callFun}>Click me </button>
        </>
    )
}

export default Todo;