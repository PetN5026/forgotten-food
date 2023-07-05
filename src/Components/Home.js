import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   navigate("/notHome");
  // });
  return (
    <div>
      HOMEPAGE
      <Link to="/notHome">nothome</Link>
    </div>
  );
};

export default Home;
