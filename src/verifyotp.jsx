import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { postJson } from "./api/client";

export default function VerifyOtp() {
  const location = useLocation();
  const navigate = useNavigate();
  const phone = location.state?.phone; // from loginpage navigate

  const [otp, setOtp] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  if (!phone) {
    // User opened /verify-otp directly without login
    return (
      <div style={{ padding: 20 }}>
        <p>No phone number found. Please login again.</p>
        <button onClick={() => navigate("/loginpage")}>Go to Login</button>
      </div>
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("");

    if (!otp.trim()) {
      setStatus("Enter OTP");
      return;
    }

    setLoading(true);
    try {
      // ✅ Call backend: /api/auth/login/verify-otp
      const res = await postJson("/auth/login/verify-otp", {
        phone,
        otp: otp.trim(),
      });

      if (res.success) {
        // Save token so ProtectedRoute works
        if (res.token) {
          localStorage.setItem("token", res.token);
        }
        setStatus("Login successful! Redirecting…");
        navigate("/dashboard");
      } else {
        setStatus(res.message || "Invalid OTP");
      }
    } catch (err) {
      console.error("Verify OTP error:", err);
      setStatus(err.message || "Verification failed. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="otp-page">
      <h2>Verify OTP</h2>
      <p>OTP sent to: {phone}</p>

      <form onSubmit={handleSubmit}>
        <input
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
        />
        <button type="submit" disabled={loading}>
          {loading ? "Verifying…" : "Verify & Continue"}
        </button>
      </form>

      {status && <p>{status}</p>}
    </div>
  );
}
