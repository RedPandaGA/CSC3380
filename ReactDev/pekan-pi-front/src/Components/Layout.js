import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
  
      <Link to="/"> Home</Link>
      <Link to="/Login"> Login</Link>
      <Link to="/RecipiesPage"> Recipies</Link>
      <Link to="/Profile"> Profile</Link>
      <Link to="/Pantry"> Pantry</Link>
      <hr></hr>
      <Outlet />
    </div>
  );
}

export default Layout;
