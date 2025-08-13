import axios from "axios"
import { useEffect, useState } from "react"

function ViewUser()
{
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(100)

    const [userData, setUserData] = useState([])

    // useEffect(()=>
    // {
    // console.log("Hi From useEffect")
    // },[ count2 ]
    // )

    async function fetchAllData(){
        const res = await axios.get("http://localhost:8000/admin/showUser")
        setUserData(res.data)
    }

    useEffect(()=>{
        fetchAllData()
    },[]
    )

    return(
        <>
        <h1>ViewUser Component</h1>
        {count}
        <button onClick={()=>setCount(count+1)}>Button</button>

        {count2}
        <button onClick={()=>setCount2(count2+1)}>Button</button>

        {userData.length>0 && (
        <table className="table table-bordered table-striped w-75 mx-auto text-center table-light">
            <thead className="table-dark">
                <tr>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Role</th>
                    <th>Active</th>
                </tr>
            </thead>
            <tbody>
                {userData.map((user)=>(
                    <tr>
                        <td>{user.userName}</td>
                        <td>{user.emailId}</td>
                        <td>{user.password}</td>
                        <td>{user.hasRole}</td>
                        <td>{user.isActive ? 'Active':'Inactive'}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        
        )}
        </>
    )
}
export default ViewUser