import { Link, Outlet } from "react-router-dom";

import MenuImage from "../Images/Home-images/menu.png";
import RecipeImage from "../Images/Home-images/recipes.png";
import WhiskImage from "../Images/Home-images/whisk2.png";
import Logo from "../Images/Home-images/logo2.png";

import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const theme = createTheme({
  // makes the theme for the whole profile
  palette: {
    background: {
      paper: "#e3eca4", //component background green lime color
      default: "#e3eca4", //background color
    },
  },
  typography: {
    fontFamily: "Playfair Display",
  },
});

function Layout(props) {
  function handleChange(e) {
    props.setDarkMode(e.target.checked);
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={`navbar ${props.darkmode ? "darkmode-navbar" : ""}`}>
        <div className="logo">
          <a href="/">
            <img src={Logo} width="150px" />
          </a>
        </div>
        <nav className={`${props.darkmode ? "darkmode-nav" : ""}`}>
          <ul id="MenuItems">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/Login">Login</a>
            </li>
            <li>
              <a href="/Recipes">Recipes</a>
            </li>
            <li>
              <a href="/Pantry">Pantry</a>
            </li>
            <li>
              <a href="/Profile/Profile">Profile</a>
            </li>
            <li>
              <a href="/About">About</a>
            </li>
            <li>
              <label class="switch">
                <input
                  type="checkbox"
                  checked={props.darkmode}
                  onChange={handleChange}
                />
                <span class="slider round"></span>
              </label>
            </li>
          </ul>
        </nav>
        <a href="search.html">
          {" "}
          {props.darkmode ? (
            <img src={RecipeImage} width="50px" height="50px" />
          ) : (
            <img src={RecipeImage} width="50px" height="50px" />
          )}{" "}
        </a>
        <a href="whisk.html">
          {" "}
          <img src={WhiskImage} width="50px" height="50px" />{" "}
        </a>
        <img
          src={MenuImage}
          className="menu-icon"
          //onClick={menuToggle()}
          alt="Menu Image"
        />
      </div>
    </ThemeProvider>

    // <div>
    //   <Link to="/"> Home</Link>
    //   <Link to="/Login"> Login</Link>
    //   <Link to="/RecipiesPage"> Recipes</Link>
    //   <Link to="/Profile/Profile"> Profile</Link>
    //   <Link to="/Pantry"> Pantry</Link>
    //   <hr></hr>
    //   <Outlet />
    // </div>
  );
}

export default Layout;
