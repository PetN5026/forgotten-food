import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import Calendar from "./Calendar";
const Home = () => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   navigate("/notHome");
  // });

  async function handleClick() {
    const res = await fetch("/api/notes");
    console.log(res);
    const data = await JSON.parse(res);
    console.log(data);
  }
  return (
    <div>
      HOMEPAGE
      <LoginForm />
      <Calendar />
      TEST
    </div>
  );
};

export default Home;
