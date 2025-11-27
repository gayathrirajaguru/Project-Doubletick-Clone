import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";


/**
 * VerifyOtp: accepts requestId + phone from location.state
 * - Replace simulateVerifyOtp() with server verification call.
 */
export default function VerifyOtp() {
  const navigate = useNavigate();
  const location = useLocation();
  const { requestId, phone, demoOtp } = location.state || {};
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [resendLoading, setResendLoading] = useState(false);
  const [verifyLoading, setVerifyLoading] = useState(false);
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    // redirect back to login if no requestId
    if (!requestId) navigate("/login");
  }, [requestId, navigate]);

  useEffect(() => {
    // countdown timer for resend
    if (seconds <= 0) return;
    const t = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [seconds]);

  async function simulateVerifyOtp(submittedOtp) {
    await new Promise((r) => setTimeout(r, 600));
    // demo: accept demoOtp or "1234"
    return { success: submittedOtp === demoOtp || submittedOtp === "1234" };
  }

  async function handleVerify(e) {
    e.preventDefault();
    setError("");
    if (!/^\d{3,8}$/.test(otp)) {
      setError("Enter a valid OTP");
      return;
    }
    setVerifyLoading(true);
    try {
      const res = await simulateVerifyOtp(otp.trim());
      if (res && res.success) {
        // on success navigate to dashboard
        navigate("/dashboard", { state: { phone } });
      } else {
        setError("Invalid OTP. Try again.");
      }
    } catch {
      setError("Verification failed. Try again.");
    } finally {
      setVerifyLoading(false);
    }
  }

  async function handleResend() {
    setResendLoading(true);
    setError("");
    // simulate resend — in production call resend API
    await new Promise((r) => setTimeout(r, 800));
    setSeconds(30);
    setResendLoading(false);
    alert("OTP resent (demo). Use 1234 as test OTP.");
  }

  return (
    <div className="ln-page">
      <div className="ln-card ln-small">
        <div className="ln-top">
          <div className="ln-brand">DoubleTick</div>
          <div className="ln-sub">Enter the OTP we sent to</div>
          <div className="ln-phone-display">{phone || "—"}</div>
        </div>

        <form className="ln-form" onSubmit={handleVerify}>
          <label className="ln-label">Enter OTP</label>

          <input
            className="ln-input ln-otp"
            placeholder="1234"
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/[^\d]/g, ""))}
            inputMode="numeric"
            maxLength={8}
          />

          {error && <div className="ln-error">{error}</div>}

          <button className="ln-btn" type="submit" disabled={verifyLoading}>
            {verifyLoading ? "Verifying…" : "Verify & Sign in"}
          </button>

          <div className="ln-resend-row">
            <button
              type="button"
              className="ln-resend"
              onClick={handleResend}
              disabled={resendLoading || seconds > 0}
            >
              {resendLoading ? "Resending…" : seconds > 0 ? `Resend in ${seconds}s` : "Resend OTP"}
            </button>

            <button
              type="button"
              className="ln-edit"
              onClick={() => navigate("/login")}
            >
              Edit number
            </button>
          </div>

          <p className="ln-terms small">
            By signing in you agree to our <a href="#">terms</a>.
          </p>
        </form>
      </div>
    </div>
  );
}
