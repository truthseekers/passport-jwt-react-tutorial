import React, { useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("email");
  const [password, setPassword] = useState("password");
  const navigate = useNavigate();

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const asyncResponse = await axios.post(
        process.env.REACT_APP_API_ENDPOINT + "login",
        { email, password },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("asyncResponse: ", asyncResponse);
      if (asyncResponse.status === 200) {
        localStorage.setItem("accessToken", asyncResponse.data.accessToken);
        navigate("/privateposts");
      }
    } catch (error) {
      console.log("err: ", error);
    }
  };

  return (
    <>
      <NavBar />
      <h3>
        Use "email" as email and "password" as password (don't include quotes)
      </h3>
      <form onSubmit={formSubmitHandler}>
        <div>
          <label>Email</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="text"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Login;
