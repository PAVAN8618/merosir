// src/components/LiveTeacher.js
import React from "react";
import { liveTeacherData } from "../teachersData";
import "./LiveTeacher.css";
import TeacherCard from "./TeacherCard";

const LiveTeacher = () => {
  return (
    <div className="live-teacher-container">
      {liveTeacherData.map((teacher) => (
        <TeacherCard key={teacher.id} teacher={teacher} />
      ))}
    </div>
  );
};

export default LiveTeacher;
