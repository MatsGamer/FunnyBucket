import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState(null);
  const [isNSFW, setIsNSFW] = useState(false);

  // Function to set the userName state when a user logs in
  const loginUser = (userName) => {
    setUserName(userName);
  };

  // Function to set the userName state when a user logs out
  const logoutUser = () => {
    setUserName();
  };

  const toggleNSFW = () => {
    setIsNSFW(!isNSFW);
  };

  return (
    <UserContext.Provider
      value={{ userName, loginUser, logoutUser, isNSFW, toggleNSFW }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
