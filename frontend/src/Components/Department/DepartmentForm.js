import React, { useState } from "react";
import axios from "axios";

const DepartmentForm = () => {
  const [departmentCode, setDepartmentCode] = useState("");
  const [departmentName, setDepartmentName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make an API call to add a department
      const response = await axios.post("/api/departments", {
        departmentCode,
        departmentName,
      });

      // Handle success - maybe show a success message or navigate to the department list
      console.log("Department added successfully", response.data);
    } catch (error) {
      // Handle error - maybe show an error message
      console.error("Error adding department", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Department Code:
        <input
          type="text"
          value={departmentCode}
          onChange={(e) => setDepartmentCode(e.target.value)}
        />
      </label>
      <label>
        Department Name:
        <input
          type="text"
          value={departmentName}
          onChange={(e) => setDepartmentName(e.target.value)}
        />
      </label>
      <button type="submit">Add Department</button>
    </form>
  );
};

export default DepartmentForm;
