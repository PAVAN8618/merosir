// BecomeInstructorForm.js
import React, { useState } from "react";
import "./BecomeInstructor.css";

const BecomeInstructorForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    education: "",
    expertise: "",
    charge: "",
    location: "",
    image: "",
    imgdata: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the form data to the onSubmit prop
    onSubmit(formData);
  };

  return (
    <div className="container">
      <h2>Become an Instructor</h2>
      <div className="main">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Age:
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Education:
            <input
              type="text"
              name="education"
              value={formData.education}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Expertise:
            <input
              type="text"
              name="expertise"
              value={formData.expertise}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Charge:
            <input
              type="text"
              name="charge"
              value={formData.charge}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Location:
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Image URL:
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
            />
            Or
            <input
              type="file"
              id="myfile"
              name="myfile"
              multiple
              value={formData.imgdata}
              onChange={handleChange}
            ></input>
          </label>

          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default BecomeInstructorForm;
