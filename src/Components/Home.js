import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   navigate("/notHome");
  // });

  function handleClick() {
    navigate("/notHome");
  }
  return (
    <div className="text-3xl font-bold underline">
      HOMEPAGE
      <button onClick={handleClick}></button>
      <Link to="/notHome">nothome</Link>
    </div>
  );
};

export default Home;
