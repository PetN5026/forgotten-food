import React, { useEffect, useState } from "react";
import AddNote from "./AddNote";
const Dashboard = () => {
  const [user, setUser] = useState({});
  const [addNotesOpen, setAddNotesOpen] = useState(false);
  useEffect(() => {
    async function getLogin() {
      const res = await fetch("/api/users/login");
      const user = await res.json();
      setUser(user);
      console.log("in use effect", user);
    }

    getLogin();
  }, []);

  return (
    <div>
      {user?.userName}'s DASHBOARDPAGE
      <button
        onClick={() => {
          console.log(addNotesOpen);
          setAddNotesOpen((open) => {
            return !open;
          });
        }}
      >
        Add notes
      </button>
      {addNotesOpen && <AddNote setAddNotesOpen={setAddNotesOpen} />}
    </div>
  );
};

export default Dashboard;
