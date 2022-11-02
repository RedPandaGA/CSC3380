import { Routes, Route, Outlet, Link, Form } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Pantry from "./Pages/Pantry";
import Profile from "./Pages/Profile";
import RecipiesPage from "./Pages/RecipiesPage";
import Login from "./Pages/Login";
import Forgot from "./Pages/Forgot/Forgot"
function App() {
  return (
    <div className="react-app">
      <Layout />
      <Routes>
        
          <Route index element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/RecipiesPage" element={<RecipiesPage />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Pantry" element={<Pantry />} />
          <Route path="/forgot" element={<Forgot />} />
       
      </Routes>
    </div>
  );
}

export default App;
