import React from "react";
import { courses } from "../teachersData";
import "./courcelist.css";

const CourseList = () => {
  return (
    <div className="course-list">
      {courses.map((course) => (
        <div key={course.id} className="course-card">
          <img src={course.image} alt={course.name} className="course-image" />
          <div className="course-details">
            <h2>{course.name}</h2>
            <p>
              <strong>Instructor:</strong> {course.teacherName}
            </p>
            <p>
              <strong>Location:</strong> {course.location}
            </p>
            <p>
              <strong>Rating:</strong> {course.rating} ⭐
            </p>
            <p>
              <strong>Price:</strong> ${course.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
