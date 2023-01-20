import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
const PrivatePosts = () => {
  const navigate = useNavigate();
  const fetchPosts = useCallback(() => {
    fetch(process.env.REACT_APP_API_ENDPOINT + "posts/private", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        console.log("data from posts/private in ui: ", data);
      } else {
        if (response.status === 401) {
          console.log("Handle unauthorized by navigating to login");
          navigate("/login");
        } else {
          console.error(
            "An error occurred. Response was not ok, and it was not a 401"
          );
        }
      }
    });
  }, []);

  useEffect(() => {
    fetchPosts();

    return () => {};
  }, [fetchPosts]);

  return (
    <div>
      <NavBar />
      PrivatePosts
    </div>
  );
};

export default PrivatePosts;
