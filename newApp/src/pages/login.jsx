import { useNavigate } from "react-router-dom"

function Login(){
    const navigate = useNavigate()

    function loginfn()
        {
            // alert('Hi...')
            navigate("/dash")
        }
    return(
        <>
        <h1> Login Componenet </h1>
        <button onClick={loginfn}> Login </button>
        </>
    )
}
export default Login