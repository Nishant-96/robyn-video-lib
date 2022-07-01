import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../context/authContext";
import { formValidationSignUp } from "../../utils";
import "./login.css";
export function SignUp() {
  const [userDetails, setUserDetails] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPass: "",
  });
  const { signUpHandler } = useAuth();

  const signUpClickHandler = (userDetails) => {
    const validation = formValidationSignUp({ ...userDetails });
    try {
      if (validation.type) {
        signUpHandler(
          userDetails.email,
          userDetails.password,
          userDetails.userName,
          userDetails.confirmPass
        );
      } else {
        throw new Error(validation.message);
      }
    } catch (error) {
      console.error(error.message);
      toast.error(`${error.message}`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

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
              value={userDetails.userName}
              onChange={(event) =>
                setUserDetails({ ...userDetails, userName: event.target.value })
              }
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={userDetails.email}
              onChange={(event) =>
                setUserDetails({ ...userDetails, email: event.target.value })
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
                setUserDetails({ ...userDetails, password: event.target.value })
              }
            />
            <label htmlFor="confirm-pwd">Confirm Password:</label>
            <input
              type="password"
              id="confirm-pwd"
              name="confirm-pwd"
              placeholder="Confirm Password"
              value={userDetails.confirmPass}
              onChange={(event) =>
                setUserDetails({
                  ...userDetails,
                  confirmPass: event.target.value,
                })
              }
            />
            <button
              className="btn btn-primary auth-btn"
              onClick={() => {
                signUpClickHandler(userDetails);
              }}
            >
              Sign Up
            </button>
            <h4>Already Have an Account ?</h4>
            <Link to="/login">Login</Link>
          </div>
        </div>

        <div className="login-background"></div>
      </div>
    </div>
  );
}
