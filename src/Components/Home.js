import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
const Home = () => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   navigate("/notHome");
  // });

  function handleClick() {
    navigate("/notHome");
  }
  return (
    <div>
      HOMEPAGE
      <button onClick={handleClick}></button>
      <Link to="/notHome">nothome</Link>
      <LoginForm />
    </div>
  );
};

export default Home;
