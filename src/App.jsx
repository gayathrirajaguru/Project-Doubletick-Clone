// src/App.jsx

import { Routes, Route } from "react-router-dom";
import Homepage from "./homepage.jsx";
import Callback from "./callback.jsx";
import Getdemo from "./getdemo.jsx";
import MenuBar from "./menubar.jsx";
import Login from "./loginpage.jsx";
import Dashboard from "./dashboard.jsx";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/callback" element={<Callback />} />
      <Route path="/login" element={<Getdemo />} />
      <Route path="/menubar" element={<MenuBar />} />
      <Route path="/loginpage" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      
      
    </Routes>
  );
}
