import {Link} from "react-router-dom"

function NavBar()
{
return(
   <nav className="navbar bg-dark navbar-expand-md navbar-dark">
        <Link to="#" className="navbar-brand">
          <img src="/images/image1.jpg" width="50px" height="auto"/>
        </Link>

        <button className="navbar-toggler" data-toggle="collapse" data-target="#myDiv">
          <span className="navbar-toggler-icon"></span>

        </button>




        
        <div className="collapse navbar-collapse" id="myDiv">
          <ul className="navbar-nav">
          <li className="nav-item"><Link className="nav-link" to="/dash/home">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/dash/about">About Us</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/dash/add">Add User</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/dash/view">View Users</Link></li>
  




          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to="">Hooks Demo</Link>
            <div className="dropdown-menu">
              <Link className="dropdown-item" to="/dash/hook1">Hook Demo1</Link>
              <Link className="dropdown-item" to="/dash/hook2">Hook Demo2</Link>
            </div>
            

          </li>



        </ul>
        </div>
        

       </nav>
      

)
}

export default NavBar