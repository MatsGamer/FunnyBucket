import React, { useContext } from "react";
import "../CSS/Navbar.css";
import { NavLink } from "react-router-dom";

//navbar and login here, Homepage and favorites page

function Navbar() {
  const [userName] = useContext(userContext);

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {userName && (
          <li>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
