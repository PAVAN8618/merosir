// Teachers.js
import React, { useState } from "react";
import { teachersData } from "../teachersData"; // Adjust the import path as per your project structure
import "./teacher.css"; // Import your CSS file

const Teachers = () => {
  //   const [selectedTeacher, setSelectedTeacher] = useState(null);
  //   const handleConnect = (teacher) => {
  //     setSelectedTeacher(teacher);
  //   };

  return (
    <div className="container">
      <h2>List of Teachers</h2>
      <ul>
        {teachersData.map((teacher) => (
          <li key={teacher.id} className="teacher">
            <img src={teacher.image} alt={teacher.name} />
            <div className="teacher-info">
              <h3>{teacher.name}</h3>
              <p>Age: {teacher.age}</p>
              <p>Education: {teacher.education}</p>
              <p className="expertise">
                Expertise: {teacher.expertise.join(", ")}
              </p>
              <p className="charge">Charge: {teacher.charge}</p>
              <p className="location">Location: {teacher.location}</p>
            </div>
            <button id="teacher_connect">Connect</button>
          </li>
        ))}
      </ul>
      {/* <div className="singleTeacher">
        {selectedTeacher &&
          selectedTeacher.map((teacher) => (
            <li key={teacher.id}>{teacher.name}</li>
          ))}
      </div> */}
    </div>
  );
};

export default Teachers;
