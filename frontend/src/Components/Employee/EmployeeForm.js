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
      {/* Form fields and input elements */}
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default EmployeeForm;
