import React, { useState, useContext } from "react";
import "../CSS/Navbar.css";
import { NavLink } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";

//navbar and login here, Homepage and favorites page

function Navbar() {
  const { userName, loginUser, logoutUser, isNSFW, toggleNSFW } =
    useContext(UserContext);
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    if (!userName && inputValue.trim().length >= 4) {
      console.log("Logging in");
      loginUser(inputValue.trim());
      setInputValue("");
      setErrorMessage(""); // Clear any previous error messages
    } else {
      console.log("Login failed:", userName, inputValue.trim());
      setErrorMessage("Username must be at least 4 character long!"); // Error message
    }
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {userName ? ( // Only shows if logged in
          <>
            <p>Welcome {userName}!</p>
            <li>
              <NavLink to="/favorites">Favorites</NavLink>
            </li>
            <li>
              <button onClick={toggleNSFW}>
                {isNSFW ? "Turn off NSFW" : "Turn on NSFW"}
              </button>
            </li>
            <li>
              <button onClick={logoutUser}>Log out</button>
            </li>
          </>
        ) : (
          <li>
            <div className="login-container">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter username"
              />
              <button onClick={handleLogin}>Log in</button>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
