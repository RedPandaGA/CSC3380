import { Link, Outlet } from "react-router-dom";

function Layout() {
    return ( 
        <div>
            <h1>Layout</h1>
            <Link to="/"> Home</Link>
            <Link to="/RecipiesPage"> Recipies</Link>
            <Link to="/Profile"> Profile</Link>
            <Link to="/Pantry"> Pantry</Link>
            <hr></hr>
            <Outlet />
        </div>
    );
}

export default Layout;