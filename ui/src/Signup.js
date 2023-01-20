import axios from "axios";
import React, { useState } from "react";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const formSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const asyncResponse = await axios.post(
        process.env.REACT_APP_API_ENDPOINT + "signup",
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
      console.log("error", error);
    }
  };

  return (
    <>
      <NavBar />
      <form onSubmit={formSubmitHandler}>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="text"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Signup;
