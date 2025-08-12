import { useParams } from "react-router-dom"
function DynamicRoute(){
    const name = useParams().name;
    console.log(name.nm);
    return(
        <>
        <h1>Dynamic Route Demo Component</h1>
        </>
    )
}
export default DynamicRoute