import { Routes, Route, Outlet, Link, Form } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Pantry from "./Pages/Pantry";
import Profile from "./Pages/Profile";
import RecipiesPage from "./Pages/RecipiesPage";
import Login from "./Pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="RecipiesPage" element={<RecipiesPage />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Pantry" element={<Pantry />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
