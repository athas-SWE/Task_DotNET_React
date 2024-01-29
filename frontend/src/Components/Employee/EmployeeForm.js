import React, { useState } from "react";
import axios from "axios";

const EmployeeForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [salary, setSalary] = useState("");
  const [department, setDepartment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/employees", {
        firstName,
        lastName,
        email,
        dob,
        salary,
        department,
      });

      // Handle success, e.g., show a success message or redirect to the employee list
      console.log("Employee added successfully:", response.data);
    } catch (error) {
      // Handle error, e.g., show an error message to the user
      console.error("Error adding employee:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* First Name */}
      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>

      {/* Last Name */}
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>

      {/* Email */}
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      {/* Date of Birth */}
      <label>
        Date of Birth:
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
      </label>

      {/* Salary */}
      <label>
        Salary:
        <input
          type="text"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
      </label>

      {/* Department */}
      <label>
        Department:
        <input
          type="text"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
      </label>

      <button type="submit">Add Employee</button>
    </form>
  );
};

export default EmployeeForm;
