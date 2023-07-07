import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function getLogin() {
      const res = await fetch("/api/users/login");
      const user = await res.json();
      console.log("in use effect", user);
    }

    getLogin();
  }, []);

  return <div>DASHBOARDPAGE</div>;
};

export default Dashboard;
