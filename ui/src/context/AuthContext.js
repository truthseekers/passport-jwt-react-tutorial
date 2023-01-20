// Not sure if context is necessary with the whole localstorage setup.

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// const AuthContext = React.createContext([{}, () => {}]);
const AuthContext = React.createContext();

function useAuth() {
  const context = React.useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

const AuthProvider = (props) => {
  const navigate = useNavigate();
  // const fetchCurrentUser = async () => {}

  // const [accessToken, setAccessToken] = useState(
  //   localStorage.getItem("accessToken")
  // );

  // const logout = () => {
  //   // If a localStorage (& maybe Redis? setup is implemented, then I believe logging out can happen completely on the front end by just removing the accessToken from localStorage???)
  //   localStorage.setItem("accessToken", "");
  //   // fetch(process.env.REACT_APP_API_ENDPOINT + "logout", {
  //   //   method: "GET",
  //   //   credentials: "include", // don't think this is necessary either
  //   //   headers: {
  //   //     "Content-Type": "application/json",
  //   //     // Authorization: `Bearer ${localStorage.getItem("token")}`,
  //   //   },
  //   // }).then(async (response) => {
  //   //   console.log("logout response: ", response);
  //   //   // if (response.ok) {
  //   //   //     const
  //   //   // }
  //   // });
  //   console.log("Logged ouuuut");
  // };

  const setLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
  };

  const logout = () => {
    // If a localStorage (& maybe Redis? setup is implemented, then I believe logging out can happen completely on the front end by just removing the accessToken from localStorage???)
    // localStorage.setItem("accessToken", "");
    console.log("new logout method");
    setLocalStorage("accessToken", "");
    console.log("Logged ouuuut");
    navigate("/login");
  };

  useEffect(() => {
    return () => {};
  }, [setLocalStorage]);

  const value = {
    logout,
    setLocalStorage,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
