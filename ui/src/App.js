import "./App.css";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import PrivatePosts from "./PrivatePosts";

const HomeRoute = () => {
  return (
    <div>
      <h2>Incomplete Passport, JWT, and React Tutorial</h2>
      <NavBar />
    </div>
  );
};

function App() {
  return (
    <div style={{ background: "yellowgreen" }}>
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/login" element={<Login />} />
        <Route path="/privateposts" element={<PrivatePosts />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
