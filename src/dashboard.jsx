// src/Dashboard.jsx
import React from "react";


export default function Dashboard() {
  return (
    <div id="app">
      {/* Top Nav */}
      <div id="nav">
        <div id="left">
          <img src="/logo.png" alt="Logo" />
        </div>
        <div id="right">
          <a href="#">
            <img src="/bulb2-removebg-preview.png" alt="Bulb" height="40" />
          </a>
          <a href="#">
            <img src="/bell-removebg-preview.png" alt="Bell" height="40" />
          </a>
          <a href="#">
            <img src="/cap-removebg-preview.png" alt="Cap" height="40" />
          </a>
          <button>Get Help</button>
        </div>
      </div>

      <div className="dashboard">
        {/* Sidebar */}
        <aside className="sidebar">
          <h3>E</h3>
          <hr />
          <ul className="menu">
            <li>
              <i className="icon">
                <img src="/home.png" alt="" />
              </i>
              <span>Home</span>
            </li>
            <li>
              <i className="icon">
                <img src="/chat.png" alt="" />
              </i>
              <span>Chats</span>
            </li>
            <li>
              <i className="icon">
                <img src="/call.png" alt="" />
              </i>
              <span>Calls</span>
            </li>
            <li>
              <i className="icon">
                <img src="/broadcast.png" alt="" />
              </i>
              <span>BroadCast List</span>
            </li>
            <li>
              <i className="icon">
                <img src="/template.png" alt="" />
              </i>
              <span>Templates</span>
            </li>
            <li>
              <i className="icon">
                <img src="/scheduled.png" alt="" />
              </i>
              <span>Scheduled BroadCast</span>
            </li>
            <li>
              <i className="icon">
                <img src="/customer.png" alt="" />
              </i>
              <span>Customers</span>
            </li>
            <li>
              <i className="icon">
                <img src="/enterprise.png" alt="" />
              </i>
              <span>Enterprise analytics</span>
            </li>
            <li>
              <i className="icon">
                <img src="/team.png" alt="" />
              </i>
              <span>Team</span>
            </li>
            <li>
              <i className="icon">
                <img src="/bot.png" alt="" />
              </i>
              <span>Bot Studio</span>
            </li>
            <li>
              <i className="icon">
                <img src="/ai agent.png" alt="" />
              </i>
              <span>Ai Agent</span>
            </li>
            <li>
              <i className="icon">
                <img src="/ads.png" alt="" />
              </i>
              <span>Ad Insights</span>
            </li>
            <li>
              <i className="icon">
                <img src="/settings.png" alt="" />
              </i>
              <span>Settings</span>
            </li>
            <li>
              <i className="icon">
                <img src="/log out.png" alt="" />
              </i>
              <span>Logout</span>
            </li>
          </ul>
        </aside>

        {/* Main */}
        <main className="main">
          <header className="topbar">
            <h2>Good morning, 👋🏻</h2>
          </header>

          {/* WhatsApp overview */}
          <section className="card">
            <h3>WhatsApp account overview</h3>
            <div className="account-info">
              <div className="account-left">
                <div className="account-title">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                  />
                  <div>
                    <h4>EC BOX INDIA</h4>
                    <p>number</p>
                  </div>
                  <span className="status active">Active</span>
                </div>

                <div className="account-quality">
                  <h5>Account quality</h5>
                  <p>
                    Determined by how messages have been received by
                    recipients over the past 7 days
                  </p>
                  <div className="quality-status high">High</div>
                  <a href="#">Learn how to improve quality</a>
                </div>
              </div>

              <div className="messaging-limit">
                <h5>Messaging limit</h5>
                <p>
                  Number of chats you can send to new customers in 24 hours
                </p>
                <div className="limit-box">
                  <button>1k</button>
                  <button className="active">
                    10k/24hrs
                    <br />
                    <small>Current</small>
                  </button>
                  <button>100k</button>
                  <button>Unlimited</button>
                </div>
                <a href="#">Learn how to increase your limit</a>
              </div>
            </div>
          </section>

          {/* Setup guide */}
          <section className="card">
            <h3>Setup guide</h3>
            <p>Use this guide to setup your DoubleTick account</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: "100%" }}></div>
            </div>
            <ul className="checklist">
              <li>✅ Setup your WABA profile</li>
              <li>✅ Invite your team members</li>
              <li>✅ Configure templates</li>
              <li>✅ Test your messaging</li>
              <li>✅ Launch your campaigns</li>
            </ul>
          </section>

          {/* Notification */}
          <div className="notification">
            <p>
              <strong>Turn on push notifications</strong>
              <br />
              Stay updated with all chat activities and DoubleTick alerts on
              your desktop.
            </p>
            <div className="notif-buttons">
              <button className="allow">Allow push notifications</button>
              <button className="later">I'll do it later</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
