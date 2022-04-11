import React from "react";
import "./login.css";
export function Forgot() {
  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-content">
          <h3>Login</h3>
          <h4>
            To reset your password, enter the email address associated with your
            account.
          </h4>
          <div className="login-wrapper-content">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
            <button className="btn btn-primary auth-btn">
              Request Password Reset
            </button>
            <button className="btn btn-primary auth-btn">Back To Login</button>
          </div>
        </div>
        <div className="login-background"></div>
      </div>
    </div>
  );
}

