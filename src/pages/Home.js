// src/Home.js
import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleTeacher = () => {
    navigate("/teacher");
  };
  const handleQuiz = () => {
    navigate("/quiz");
  };
  return (
    <div className="home">
      <div className="left">
        <h1>Search your Favorite Teacher</h1>
        <p>TOP NOTCH TRAINED PROFESSIONALS</p>
        <div className="teacher_quiz">
          <button id="teacher" onClick={handleTeacher}>
            Teacher
          </button>
          <button id="quiz" onClick={handleQuiz}>
            Quiz
          </button>
        </div>
      </div>
      <div className="right">
        <img
          src="https://plus.unsplash.com/premium_vector-1682310959765-7054a7e77951?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Search your Favorite Teacher"
          className="home-image"
        />
      </div>
    </div>
  );
};

export default Home;
