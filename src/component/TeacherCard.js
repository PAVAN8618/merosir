import React from "react";
import "./LiveTeacher.css";

const TeacherCard = ({ teacher }) => {
  return (
    <div className="teacher-card">
      {teacher.isLive && <div className="live-indicator">LIVE</div>}
      <img
        src={teacher.imageUrl}
        alt={`${teacher.instructor}`}
        className="teacher-image"
      />
      <h3>
        {teacher.className} - by {teacher.instructor}
      </h3>
      <div className="reviews">
        <span className="stars">{"★".repeat(Math.round(teacher.rating))}</span>
        <span>({teacher.reviews} reviews)</span>
      </div>
      <div className="class-details">
        <span>{teacher.date}</span>
        <div className="timer">Class starts in {teacher.classStartTime}</div>
      </div>
      <button className="register-button">Register Now</button>
      {teacher.isFree && <div className="free-trial">FREE Trial Class</div>}
    </div>
  );
};

export default TeacherCard;
