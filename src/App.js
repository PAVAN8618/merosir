// src/App.js
import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Teachers from "./pages/Teachers";
import Quiz from "./pages/Quiz";
import BecomeInstructorForm from "./pages/BecomeInstructorForm";
import About from "./pages/About";
import Footer from "./pages/Footer";
import Connect from "./pages/Connect";
import CourseList from "./pages/CourseList";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/courses" element={<CourseList />} />
          <Route path="/instructor" element={<BecomeInstructorForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Connect />} />
          <Route path="/teacher" element={<Teachers />}></Route>
          <Route path="/quiz" element={<Quiz />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
