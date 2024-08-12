import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Our Application</h1>
      <p>
        Welcome to the Teacher Application! This platform is designed to help
        teachers manage their classes, track student progress, and provide a
        seamless educational experience.
      </p>
      <h2>Features:</h2>
      <ul>
        <li>Manage class schedules and assignments</li>
        <li>Track student attendance and performance</li>
        <li>Communicate with students and parents</li>
        <li>Access teaching resources and materials</li>
      </ul>
      <p>
        Our mission is to make teaching more effective and efficient by
        providing the tools and resources teachers need to succeed in the
        classroom. We hope you find our application helpful and easy to use.
      </p>
    </div>
  );
};

export default About;
