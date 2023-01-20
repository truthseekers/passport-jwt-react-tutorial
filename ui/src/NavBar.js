import { useNavigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

const NavBar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      <p
        style={{
          color: "blue",
          textDecoration: "underline",
          cursor: "pointer",
        }}
        onClick={() => logout()}
      >
        Logout
      </p>
      <p
        style={{
          color: "blue",
          textDecoration: "underline",
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      >
        To home
      </p>
      <p
        style={{
          color: "blue",
          textDecoration: "underline",
          cursor: "pointer",
        }}
        onClick={() => navigate("/login")}
      >
        To login
      </p>
      <p
        style={{
          color: "blue",
          textDecoration: "underline",
          cursor: "pointer",
        }}
        onClick={() => navigate("/signup")}
      >
        To Signup
      </p>
      <p
        style={{
          color: "blue",
          textDecoration: "underline",
          cursor: "pointer",
        }}
        onClick={() => navigate("/publicposts")}
      >
        To Public Posts
      </p>
      <p
        style={{
          color: "blue",
          textDecoration: "underline",
          cursor: "pointer",
        }}
        onClick={() => navigate("/privateposts")}
      >
        To Private Posts
      </p>
    </div>
  );
};

export default NavBar;
