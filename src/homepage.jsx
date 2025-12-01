// src/pages/Homepage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

import Callback from "./callback.jsx";

import Getdemo from "./getdemo.jsx";
import "./menubar.jsx";
import "./loginpage.jsx"



export default function Homepage() {
 const navigate = useNavigate();
  return (
    <div className="homepage">
      

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">
          <div id="nav">
            <img src="./r4logo.jpg" alt="" />
          <a href="" onClick={() => { navigate("/"); }}
            role="button"
            tabIndex={0}
            aria-label="Go to home"><h1 className="logo">DoubleTickClone</h1></a>
          </div>

          <div className="nav-links">
           <a id="btn-primary"
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                e.preventDefault();
                navigate("/callback");
              }}><img src="./call.png" alt=""  /></a>
            <a  id="a1"href=" " onClick={() => navigate("/menubar")}><img src="./line.png" alt="" /></a>
            
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <h1 className="hero-title">
            Automate Your WhatsApp Marketing & Lead Generation
          </h1>

          <p className="hero-desc">
            Manage messages, send templates, automate follow-ups, and track performance —
            all in one powerful dashboard.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary1"  onClick={() => navigate("/login")}>Get a Demo
            </button>
             <button className="btn-outline" onClick={() => navigate("/login")}>Signin</button>
            
            <button className="btn-outline" 
              onClick={() => navigate("/loginpage")}>Login</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-preview">Dashboard Preview UI</div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="features">
        <h2 className="section-title">Powerful Features</h2>
        <p className="section-subtitle">
          Everything you need to scale your communication
        </p>

        <div className="features-grid">
          {[
            "WhatsApp Cloud API Integration",
            "Broadcast Messaging",
            "Template Message Sender",
            "Auto Follow-Up System",
            "Team Access & Roles",
            "Analytics & Message Logs",
          ].map((item) => (
            <div key={item} className="feature-card">
              <h3>{item}</h3>
              <p>Boost your business communication using simple and powerful tools.</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRIMARY CTA */}
      <section className="cta-section">
        <div className="cta-inner">
          <h2 className="cta-title">
            Ready to grow your business with WhatsApp automation?
          </h2>
          <p className="cta-subtitle">Create your free account in 30 seconds.</p>

          <button className="cta-btn">Get Started Free</button>
        </div>
      </section>

      {/* TESTIMONIALS */}
      {/*<section className="testimonials">
        <h2 className="section-title">What Our Users Say</h2>

        <div className="testimonials-grid">
          {[
            { name: "Ramesh", text: "This platform helped us boost customer engagement instantly!" },
            { name: "Suresh", text: "Automation features saved us countless hours every week." },
            { name: "Priya",  text: "Very easy to use and the dashboard is super clean." },
          ].map((t) => (
            <div key={t.name} className="testimonial-card">
              <p className="testimonial-text">“{t.text}”</p>
              <h4 className="testimonial-name">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>
      */}

      {/* HOW IT WORKS */}
      <section className="how-it-works">
        <h2 className="section-title">How It Works</h2>

        <div className="how-grid">
          {[
            "Sign Up & Create Your Account",
            "Connect WhatsApp Cloud API",
            "Start Sending Templates & Automations",
          ].map((step, index) => (
            <div key={index} className="how-card">
              <div className="how-number">{index + 1}</div>
              <p className="how-desc">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT HIGHLIGHTS */}
      <section className="highlights">
        <h2 className="section-title">Product Highlights</h2>

        <div className="highlights-grid">
          {[
            "Send unlimited WhatsApp messages using Cloud API",
            "Track message delivery & response analytics",
            "Create reusable templates for campaigns",
            "Enable teams to collaborate with permissions",
          ].map((highlight) => (
            <div key={highlight} className="highlight-item">
              <div className="highlight-icon">✓</div>
              <p>{highlight}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
