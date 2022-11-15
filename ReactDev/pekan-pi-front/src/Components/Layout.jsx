import { useState } from "react";
import navOpenImg from "../Images/navbar/bars-solid.svg";
import navCloseImg from "../Images/navbar/x-solid.svg";
import Logo from "../Images/Home-images/logo2.png";
import AboutImage from "../Images/Home-images/whiskpot.png";

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
    fontFamily: "Playfair Display", // default font 
    fontWeightRegular: 700,
  },
});

/**Layout component */
function Layout(props) {
  // variable to check screen size
  const [navOpen, setNavOpen] = useState(false);

  // function that handles when darkmode toggle is on or off
  function handleChange(e) {
    props.setDarkMode(e.target.checked);
  }

  // function that logs user out of webpage and sends user back to Login.jsx
  const handleLogout = () => {
    localStorage.clear()
    window.location.replace('/Login')
  }

  return (
    // provides standard theme for component
    <ThemeProvider theme={theme}> 
      <CssBaseline />
      <div className={`navbar ${props.darkmode ? "darkmode-navbar" : ""}`}>
        {/*************************************       START NAVBAR       *************************************/}
        <nav
          style={{ right: navOpen ? "0%" : "-100%" }}
          className={`${props.darkmode ? "darkmode-nav" : ""}`}
        >
          <ul className="ul-menu" id="MenuItems" style={{ padding: "0" }}> 
            <li>
              {/* pekan pi logo */}
              <div className="logo">
                <a href="/">
                  <img src={Logo} alt="PekanLogo" width="150px" />
                </a>
              </div>
            </li>
            {/* navigation bar at the top of main pages */}
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
              {/* dark mode switch/slider  */}
              <label className="switch">
                <input
                  type="checkbox"
                  checked={props.darkmode}
                  onChange={handleChange}
                />
                <span className="slider round"></span>
              </label>
            </li>
            {/* logout button on navigation bar  */}
            <li>
              <div>
              <a styles={{ justifyContent: "center" }} className="logoutbutton" onClick={handleLogout}>
                {" "}
                Logout{" "}
              </a>
              </div>
            </li>
            {/* about image (the whisk and pot), links to about page  */}
            <li>
              <div className="about-img">
                <a href="/About">
                  <img src={AboutImage} alt="AboutImg" width="100px" />
                </a>
              </div>
            </li>
          </ul>
        </nav>
        {/*************************************       END NAVBAR       *************************************/}

        {/* menu icon for when screen size is small enough */}
        <div>
          <img
            alt="MenuImg"
            src={navOpen ? navCloseImg : navOpenImg}
            className="menu-icon"
            onClick={() => {
              setNavOpen(!navOpen);
            }}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Layout;
