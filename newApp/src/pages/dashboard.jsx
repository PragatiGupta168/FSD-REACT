import { Outlet } from "react-router-dom"
import NavBar from "../components/myNav"

function Dashboard(){
    return(

        <>
        <NavBar/>
        <h1> DashBoard Componenet </h1>
        <Outlet/>   
        </>
    )
}
export default Dashboard