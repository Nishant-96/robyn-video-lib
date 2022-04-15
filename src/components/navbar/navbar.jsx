import React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { useAuth } from "../../context/authContext";
import { useData } from "../../context/data-context";
export function Navbar() {
  const { isLoggedIn, logoutHandler } = useAuth();
  const { state, dispatch } = useData();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  function searchHandler(event) {
    if (pathname !== "/explore") {
      navigate("/explore");
    }
    if (event.key === "Enter" || event.key === "Backspace") {
      dispatch({
        type: "SEARCHED_VIDEO",
        payload: { value: event.target.value },
      });
    }
  }

  return (
    <div className="navbar">
      <div className="nav-left">
        <Link to="/">RobynTube</Link>
      </div>
      <div className="nav-right">
        <div className="nav-right-input">
          <input
            placeholder="Search"
            type="Search"
            value={state.searchInput}
            onChange={(event) =>
              dispatch({
                type: "SET_SEARCH_INPUT",
                payload: { value: event.target.value },
              })
            }
            onKeyDown={(event) => searchHandler(event)}
          />
          <SearchIcon className="nav-right-icon" />
        </div>
        <NavLink to="/login">
          <button className={`btn nav-btn ${isLoggedIn() ? "hide-btn" : null}`}>
            Login
          </button>
        </NavLink>
        <button
          className={`btn nav-btn logout-btn ${
            isLoggedIn() ? null : "hide-btn"
          }`}
          onClick={() => {
            logoutHandler();
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
