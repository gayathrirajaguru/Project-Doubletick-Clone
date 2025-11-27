import React from "react";
import { useNavigate } from "react-router-dom";
import "./menubar.css";

/**
 * MobileMenuAlt
 * - Can be used as a standalone route (/menu) or as an overlay/modal.
 * - Accepts optional onClose prop: if provided, it calls onClose(); otherwise it uses history.back().
 *
 * Usage (route): <Route path="/menu" element={<MobileMenuAlt />} />
 * Usage (overlay): <MobileMenuAlt onClose={() => setShow(false)} />
 */
export default function MenuBar({ onClose }) {
  const navigate = useNavigate();

  function close() {
    if (typeof onClose === "function") onClose();
    else navigate(-1);
  }

  return (
    <div className="mma-backdrop" role="dialog" aria-modal="true" aria-label="Site menu">
      <aside className="mma-drawer">
        <div className="mma-top">
          <div
            className="mma-brand"
            onClick={() => { navigate("/"); }}
            role="button"
            tabIndex={0}
            aria-label="Go to home"
          >
            <span className="mma-logo"><img src="./r4leads.png" alt="" /></span>
            <span className="mma-title">DoubleTickClone</span>
          </div>

          <div className="mma-actions">
            <a className="mma-callbtn" href="tel:+911234567890" aria-label="Call us">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 3.08 4.18 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72c.12 1.05.37 2.07.73 3.03a2 2 0 0 1-.45 2.11L9.91 10.09a16 16 0 0 0 6 6l1.23-1.23a2 2 0 0 1 2.11-.45c.96.36 1.98.61 3.03.73A2 2 0 0 1 22 16.92z" fill="#fff"/>
              </svg>
            </a>
            <button className="mma-close" onClick={close} aria-label="Close menu">✕</button>
          </div>
        </div>

        <nav className="mma-nav" aria-label="Main navigation">
          <button className="mma-link" onClick={() => navigate("/blog")}>Blog</button>
          <button className="mma-link" onClick={() => navigate("/pricing")}>Pricing</button>
          <button className="mma-link" onClick={() => navigate("/careers")}>Careers</button>
          <button className="mma-link strong" onClick={() => navigate("/partners")}>Partner with us</button>
        </nav>

        <div className="mma-footer">
          <button className="mma-book" onClick={() => navigate("/signup")}>Book Demo</button>

          
        </div>
      </aside>
    </div>
  );
}
