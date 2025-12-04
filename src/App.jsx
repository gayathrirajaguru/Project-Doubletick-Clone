// src/App.jsx

import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./homepage.jsx";
import Callback from "./callback.jsx";
import Getdemo from "./getdemo.jsx";
import MenuBar from "./menubar.jsx";
import Login from "./loginpage.jsx";
import Dashboard from "./dashboard.jsx";
import VerifyOtp from "./verifyotp.jsx";

// 🔐 PROTECTED ROUTE FUNCTION
function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  if (!token) {
    // If no token → redirect to loginpage
    return <Navigate to="/loginpage" replace />;
  }
  return children;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/callback" element={<Callback />} />
      <Route path="/login" element={<Getdemo />} />
      <Route path="/menubar" element={<MenuBar />} />
      <Route path="/loginpage" element={<Login />} />

      {/* 🔥 PROTECTED Dashboard Route */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route path="/verify-otp" element={<VerifyOtp />} />
    </Routes>
  );
}

