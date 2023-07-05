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
function App() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="" element={<Home />} />
          <Route path="/notHome" element={<NotHome />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
