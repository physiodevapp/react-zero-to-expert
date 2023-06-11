import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link> */}
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark rounded-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            useContext
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                  to={'/'}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                  to={'/about'}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                  to={'/login'}
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export { Navbar };
