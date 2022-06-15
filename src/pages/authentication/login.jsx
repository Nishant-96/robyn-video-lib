import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";

import "./login.css";
export function Login() {
  const { loginHandler } = useAuth();

  const [userDetails, setUserDetails] = useState({ email: "", password: "" });

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
              value={userDetails.email}
              onChange={(event) =>
                setUserDetails((prev) => ({
                  ...prev,
                  email: event.target.value,
                }))
              }
            />
            <label htmlFor="pwd">Password:</label>
            <input
              type="password"
              id="pwd"
              name="pwd"
              placeholder="Enter Password"
              value={userDetails.password}
              onChange={(event) =>
                setUserDetails((prev) => ({
                  ...prev,
                  password: event.target.value,
                }))
              }
            />
            <div>
              <label>
                <input type="checkbox" />
                Remember Me
              </label>
              <Link to="/forgot-password">Forgot Your Password ?</Link>
            </div>
            <button
              className="btn btn-primary auth-btn"
              onClick={() => {
                loginHandler(userDetails.email, userDetails.password);
              }}
            >
              Login
            </button>
            <button
              className="btn btn-primary auth-btn"
              onClick={() => {
                loginHandler("nishant@gmail.com", "nishant123");
              }}
            >
              Guest Login
            </button>
            <h4>Not a member yet?</h4>
            <Link to="/sign-up">Sign Up</Link>
          </div>
        </div>
        <div className="login-background"></div>
      </div>
    </div>
  );
}
