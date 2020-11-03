import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const auth = React.useContext(AuthContext);
  const history = useHistory()

  const logoutHandler = (e) => {

    auth.logout()
    history.push('/')
  };

  return (
    <nav>
      <div className="nav-wrapper blue darken-1">
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/create">Create</NavLink>
          </li>
          <li>
            <NavLink to="/links">Links</NavLink>
          </li>
          <li>
            <span onClick={logoutHandler}>
              Logout
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
