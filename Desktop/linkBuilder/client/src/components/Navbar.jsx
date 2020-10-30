import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const auth = React.useContext(AuthContext);
  const history = useHistory()
  const logoutHandler = (e) => {
    e.preventdefault()
    auth.logout()
    history.push('/')
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/create">Create</NavLink>
          </li>
          <li>
            <NavLink to="/links">Links</NavLink>
          </li>
          <li>
            <a href="/" onClick={logoutHandler}>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
