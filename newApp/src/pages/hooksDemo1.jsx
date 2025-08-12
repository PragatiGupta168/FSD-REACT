import { useState } from "react"

function HookDemo1()
{
    console.log("Component Rendered....");
    
    // let count = 0
    function btnClick()
    {
        setCount(count+1)
        console.log(count);   
    }

    const [count, setCount] = useState(0)
    // console.log(arr);

    return(
        <>
        <h1> Hooks Demo Component </h1>
        <div align='center'>
        Count : {count} <br/>
        <button onClick={btnClick} className="btn btn-outline-primary"> Button </button>
        </div>
        </>
    )
}

export default HookDemo1