import { Routes, Route, Link } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Pantry from "./Pages/Pantry";
import Profile from "./Pages/Profile";
import RecipiesPage from "./Pages/RecipiesPage";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Forgot from "./Pages/Forgot/Forgot";
import "./index.css";
import { useState } from "react";

function App() {
  const [darkmode, setDarkMode] = useState(false);

  // returns Home.js with footer including check for darkmode
  function HomeElement() {
    return (
      <>
        {" "}
        <Layout darkmode={darkmode} setDarkMode={setDarkMode} />{" "}
        <Home darkmode={darkmode} />
        <footer className="footer">
          <p className="pFooter">Learn more about our website and creators!</p>
          <div className="footerLinks">
            <Link to="/About" className="footerLink">
              About Us
            </Link>
            <Link to="/forgot" className="footerLink">
              Forgot Password?
            </Link>
          </div>
        </footer>
      </>
    );
  }

  // returns About.js including check for darkmode
  function AboutElement() {
    return (
      <>
        {" "}
        <Layout darkmode={darkmode} setDarkMode={setDarkMode} />{" "}
        <About darkmode={darkmode} />
      </>
    );
  }

  // returns Profile.jsx including check for darkmode
  function ProfileElement() {
    return (
      <>
        {" "}
        <Layout darkmode={darkmode} setDarkMode={setDarkMode} />{" "}
        <Profile darkmode={darkmode} />
      </>
    );
  }

  // returns Forgot.jsx including check for darkmode
  function ForgotElement() {
    return (
      <>
        {" "}
        <Layout darkmode={darkmode} setDarkMode={setDarkMode} />{" "}
        <Forgot darkmode={darkmode} />
      </>
    );
  }

  // returns RecipiesPage.jsx including check for darkmode
  function RecipePage() {
    return (
      <>
        {" "}
        <Layout darkmode={darkmode} setDarkMode={setDarkMode} />{" "}
        <RecipiesPage darkmode={darkmode} />
      </>
    );
  }

  // returns Pantry.jsx including check for darkmode
  function PantryPage() {
    return (
      <>
        {" "}
        <Layout darkmode={darkmode} setDarkMode={setDarkMode} />{" "}
        <Pantry darkmode={darkmode} />
      </>
    );
  }

  // returns the navbar that displays on all webpages
  return (
    <div className={`react-app ${darkmode ? "darkmode-page" : ""}`}>
      <Routes className="NavBar">
        <Route index element={<HomeElement />} />
        <Route path="/Login" element={<Login darkmode={darkmode} />} />
        <Route path="/Recipes" element={<RecipePage />} />
        <Route path="/Profile/Profile" element={<ProfileElement />} />
        <Route path="/Pantry" element={<PantryPage />} />
        <Route path="/About" element={<AboutElement />} />
        <Route path="/forgot" element={<ForgotElement />} />
      </Routes>
    </div>
  );
}

export default App;
