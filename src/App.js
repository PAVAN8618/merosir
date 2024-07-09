// src/App.js
import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Teachers from "./pages/Teachers";
import Quiz from "./pages/Quiz";
import BecomeInstructorForm from "./pages/BecomeInstructorForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/courses" element={<div>My Courses Page</div>} />
          <Route path="/instructor" element={<BecomeInstructorForm />} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
          <Route path="/teacher" element={<Teachers />}></Route>
          <Route path="/quiz" element={<Quiz />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
