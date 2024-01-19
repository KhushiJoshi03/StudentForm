import {Link, useNavigate } from "react-router-dom";
import Login from "./Login";
function Menu()
{
  var nav=useNavigate()
  const remove = (e) => {
    localStorage.removeItem("Username");
    localStorage.removeItem("Password");
    nav("/Login")
    // localStorage.clear();
  };
 return(
    <>
   <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#E5E1DA"}}>
  <div className="container-fluid" style={{fontFamily:"Times New Roman",color:"#3D3B40"}}>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
    <ul className="nav nav-tabs">
  <li className="nav-item">
    <Link className="nav-link active" to="/Home">Home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/Add">Add Student</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/Display">Display Student</Link>
  </li>
  <li className="nav-item dropdown">
    <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="/Login">Setting</Link>
    <ul className="dropdown-menu">
      <li><Link className="dropdown-item" to="/Login">Login</Link></li>
    </ul>
  </li>
</ul>
<div style={{paddingInlineStart:"60%"}}>
<button className="btn btn-outline-danger" type="submit" onClick={remove}>Logout</button>
</div>
    </div>
  </div>

</nav>
    </>
 )
}
export default Menu;