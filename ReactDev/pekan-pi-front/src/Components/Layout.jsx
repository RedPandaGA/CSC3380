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
    fontFamily: "Playfair Display",
    fontWeightRegular: 700,
  },
});

/**Layout component */
function Layout(props) {
  const [navOpen, setNavOpen] = useState(false);

  function handleChange(e) {
    props.setDarkMode(e.target.checked);
  }

  const handleLogout = () => {
    localStorage.clear()
    window.location.replace('/Login')
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={`navbar ${props.darkmode ? "darkmode-navbar" : ""}`}>
        <nav
          style={{ right: navOpen ? "0%" : "-100%" }}
          className={`${props.darkmode ? "darkmode-nav" : ""}`}
        >
          <ul className="ul-menu" id="MenuItems" style={{ padding: "0" }}>
            <li>
              <div className="logo">
                <a href="/">
                  <img src={Logo} alt="PekanLogo" width="150px" />
                </a>
              </div>
            </li>
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
            {/* <li>
              <a href="/About">About</a>
            </li> */}
            <li>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={props.darkmode}
                  onChange={handleChange}
                />
                <span className="slider round"></span>
              </label>
            </li>
            <li>
              <a styles={{ justifyContent: "center" }} className="btn" onClick={handleLogout}>
                {" "}
                Logout{" "}
              </a>
              </div>
            </li>
            <div className="about-img">
              <a href="/About">
                <img src={AboutImage} alt="AboutImg" width="100px" />
              </a>
            </div>
          </ul>
        </nav>

        <img
          alt="MenuImg"
          src={navOpen ? navCloseImg : navOpenImg}
          className="menu-icon"
          onClick={() => {
            setNavOpen(!navOpen);
          }}
        />
      </div>
    </ThemeProvider>
  );
}

export default Layout;
