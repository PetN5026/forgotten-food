import React, { useEffect, useState } from "react";
import AddNote from "./AddNote";
import Card from "./Card";
import Navbar from "./Navbar";
const Dashboard = () => {
  const [user, setUser] = useState({});
  const [addNotesOpen, setAddNotesOpen] = useState(false);
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    async function getLogin() {
      const res = await fetch("/api/users/login");
      const user = await res.json();
      setUser(user);
      console.log("in use effect", user);

      const noteRes = await fetch("/api/notes/");
      const notes = await noteRes.json();
      setNotes(notes);
    }

    getLogin();
  }, []);

  return (
    <div>
      <Navbar />
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
      STUFF ABOVE
      {addNotesOpen && (
        <AddNote setAddNotesOpen={setAddNotesOpen} user={user} />
      )}
      STUFF BELOW
      <div>
        {notes.map((note) => {
          return <Card note={note} />;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
