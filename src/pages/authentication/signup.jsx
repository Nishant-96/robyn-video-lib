import React from "react";
import "./login.css";
export function SignUp() {
  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-content signup-content">
          <h3>Sign Up</h3>
          <div className="login-wrapper-content">
            <label htmlFor="username">Username:</label>
            <input
              type="username"
              id="username"
              name="username"
              placeholder="Enter your name"
            />
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
            <label htmlFor="confirm-pwd">Confirm Password:</label>
            <input
              type="password"
              id="confirm-pwd"
              name="confirm-pwd"
              placeholder="Confirm Password"
            />
            <label>
              <input type="checkbox" />I Accept all terms and Conditions
            </label>
            <button className="btn btn-primary auth-btn">Sign Up</button>
            <h4>Already Have an Account ?</h4>
            <a>Login</a>
          </div>
        </div>

        <div className="login-background"></div>
      </div>
    </div>
  );
}
