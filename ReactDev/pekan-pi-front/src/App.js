import { Routes, Route, Outlet, Link, Form } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Pantry from "./Pages/Pantry";
import Profile from "./Profile/Profile";
import RecipiesPage from "./Pages/RecipiesPage";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Forgot from "./Pages/Forgot/Forgot";
import "./index.css";

import { useState } from "react";

function App() {
  const [darkmode, setDarkMode] = useState(false);

  function HomeElement() {
    return (
      <>
        {" "}
        <Layout darkmode={darkmode} setDarkMode={setDarkMode} />{" "}
        <Home darkmode={darkmode} />
      </>
    );
  }
  function ProfileElement() {
    return (
      <>
        {" "}
        <Layout darkmode={darkmode} setDarkMode={setDarkMode} />{" "}
        <Profile darkmode={darkmode} />
      </>
    );
  }
  function ForgotElement() {
    return (
      <>
        {" "}
        <Layout darkmode={darkmode} setDarkMode={setDarkMode} />{" "}
        <Forgot darkmode={darkmode} />
      </>
    );
  }

  function RecipePage() {
    return (
      <>
        {" "}
        <Layout darkmode={darkmode} setDarkMode={setDarkMode} />{" "}
        <RecipiesPage darkmode={darkmode} />
      </>
    );
  }

  function PantryPage() {
    return <> <Layout darkmode={darkmode}  setDarkMode={setDarkMode} /> <Pantry darkmode={darkmode}  /></>
    return <> <footer></footer></>
  }

  return (
    <div className={`react-app ${darkmode ? "darkmode-page" : ""}`}>
      <Routes className="NavBar">
        <Route index element={<HomeElement />} />
        <Route path="/Login" element={<Login darkmode={darkmode} />} />
        <Route path="/Recipes" element={<RecipePage />} />
        <Route path="/Profile/Profile" element={<ProfileElement />} />
        <Route path="/Pantry" element={<PantryPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/forgot" element={<ForgotElement />} />
      </Routes>

      {/*add footer */}
      <footer className="footer"> 
      <p className="pFooter">Learn more about our website and creators!</p>
      <div className="footerLinks">
      <Link to="/Profile/Profile" className="footerLink">About Us</Link>
      <Link to="/forgot" className="footerLink">Forgot Password?</Link>
      </div> 
    
      </footer> 

    </div>
  );
}

export default App;
