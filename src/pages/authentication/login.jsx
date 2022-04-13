import React from "react";
import { Link } from "react-router-dom";

import "./login.css";
export function Login() {
  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-content">
          <h3>Login</h3>
          <div className="login-wrapper-content">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
            <label htmlFor="pwd">Password:</label>
            <input
              type="password"
              id="pwd"
              name="pwd"
              placeholder="Enter Password"
            />
            <div>
              <label>
                <input type="checkbox" />
                Remember Me
              </label>
              <Link to="/forgot-password">Forgot Your Password ?</Link>
            </div>
            <button className="btn btn-primary auth-btn">Login</button>
            <h4>Not a member yet?</h4>
            <Link to="/sign-up">Sign Up</Link>
          </div>
        </div>
        <div className="login-background"></div>
      </div>
    </div>
  );
}
