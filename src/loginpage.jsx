import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./loginpage.css";

/**
 * Login: collect phone number and "send OTP"
 * - Replace simulateSendOtp() with your API call.
 */
export default function Login() {
  const navigate = useNavigate();
  const [country, setCountry] = useState("+91");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function validPhone(p) {
    return /^[0-9]{6,15}$/.test(p.replace(/\s+/g, ""));
  }

  async function simulateSendOtp(fullNumber) {
    // simulate API latency & return a fake requestId / otp for demo
    await new Promise((r) => setTimeout(r, 700));
    // In production you should call your API and return a request id or token
    return { success: true, requestId: "req_" + Math.random().toString(36).slice(2, 9), otp: "1234" };
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (!validPhone(phone)) {
      setError("Enter a valid phone number (10 digits)");
      return;
    }

    const fullNumber = `${country}${phone.trim()}`;
    setLoading(true);

    try {
      const res = await simulateSendOtp(fullNumber);
      if (res && res.success) {
        // send requestId (or server token) to otp page
        navigate("/verify-otp", { state: { requestId: res.requestId, phone: fullNumber, demoOtp: res.otp } });
      } else {
        setError("Failed to send OTP. Try again.");
      }
    } catch (err) {
      setError("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="ln-page">
      <div className="ln-card">
        <div className="ln-top">
          <div className="ln-brand">DoubleTick</div>
          <div className="ln-sub">Secure sign in — fast OTP</div>
        </div>

        <form className="ln-form" onSubmit={handleSubmit}>
          <label className="ln-label">WhatsApp Number</label>

          <div className="ln-phone-row">
            <select
              className="ln-country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="+91">IN +91</option>
              <option value="+1">US +1</option>
              <option value="+44">UK +44</option>
              <option value="+61">AU +61</option>
            </select>

            <input
              className="ln-input"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/[^\d]/g, ""))}
              inputMode="numeric"
            />
          </div>

          {error && <div className="ln-error">{error}</div>}

          <button className="ln-btn" type="submit" disabled={loading}>
            {loading ? "Sending OTP…" : "Send OTP"}
          </button>

          <div className="ln-or">
            <span />
            <small>or</small>
            <span />
          </div>

          

          <p className="ln-terms">
            By continuing you agree to our <a href="#">terms of service</a> & <a href="#">privacy policy</a>
          </p>
        </form>
      </div>
    </div>
  );
}
