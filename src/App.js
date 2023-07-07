import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Components/Home";
import NotHome from "./Components/NotHome";
import Dashboard from "./Components/Dashboard";
function App() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="" element={<Home />} />
          <Route path="/notHome" element={<NotHome />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
