import React, { useContext } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import Notecontext from "../context/notes/Notecontext";

export default function Navbar() {
  const context = useContext(Notecontext);
  const { ShowAlert } = context;
  let History = useHistory();
  let location = useLocation();
 
  const Handle_Logout = () => {
    localStorage.removeItem("Token");
    ShowAlert("Login Please..", "success ");
    History.push("/Login");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <div className="navbar-brand">
          NootBook
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              {localStorage.getItem("Token") && <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>}
            </li>
            <li className="nav-item">
              {localStorage.getItem("Token") && <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                About Us
              </Link>}
            </li>
          </ul>
        </div>
      </div>
      {localStorage.getItem("Token") ? (
        <button
          type="button"
          className="btn btn-info mx-2"
          onClick={Handle_Logout}
        >
          LogOut
        </button>
      ) : (
        (location.pathname==="/Login" ? "" :<div className = "d-flex">
        <Link className="btn btn-info mx-2" to="/Login">
          Login
        </Link>
      </div>)
      )}
    </nav>
  );
}
