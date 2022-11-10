import { Routes, Route, Link } from "react-router-dom";
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
  function AboutElement() {
    return (
      <>
        {" "}
        <Layout darkmode={darkmode} setDarkMode={setDarkMode} />{" "}
        <About darkmode={darkmode} />
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
    // <<<<<<<<< Temporary merge branch 1
    return (
      <>
        {" "}
        <Layout darkmode={darkmode} setDarkMode={setDarkMode} />{" "}
        <Pantry darkmode={darkmode} />
      </>
    );
    // =========
    return (
      <>
        {" "}
        <Layout darkmode={darkmode} setDarkMode={setDarkMode} />{" "}
        <Pantry darkmode={darkmode} />
      </>
    );
    return (
      <>
        {" "}
        <footer></footer>
      </>
    );
    // >>>>>>>>> Temporary merge branch 2
  }

  return (
    <div className={`react-app ${darkmode ? "darkmode-page" : ""}`}>
      <Routes className="NavBar">
        <Route index element={<HomeElement />} />
        <Route path="/Login" element={<Login darkmode={darkmode} />} />
        <Route path="/RecipiesPage" element={<RecipePage />} />
        <Route path="/Profile/Profile" element={<ProfileElement />} />
        <Route path="/Pantry" element={<PantryPage />} />
        <Route path="/About" element={<AboutElement />} />
        <Route path="/forgot" element={<ForgotElement />} />
      </Routes>

      {/*add footer */}
      {/* <<<<<<<<< Temporary merge branch 1 */}
      {/* ========= */}
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

      {/* >>>>>>>>> Temporary merge branch 2 */}
    </div>
  );
}

export default App;
