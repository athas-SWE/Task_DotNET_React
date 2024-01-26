import React, { useState, useEffect } from "react";
import api from "../../services/api"; // assuming api.js is in the services directory

const DepartmentList = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    // Fetch departments when the component mounts
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const response = await api.get("/departments"); // Adjust the endpoint based on your API design
      setDepartments(response.data);
    } catch (error) {
      console.error("Error fetching departments:", error);
    }
  };

  return (
    <div>
      <h2>Department List</h2>
      <ul>
        {departments.map((department) => (
          <li key={department.id}>
            {department.departmentCode} - {department.departmentName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DepartmentList;
