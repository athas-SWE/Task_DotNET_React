import React, { useEffect, useState } from "react";
import api from "../../services/api"; // Assuming api.js is in the services directory

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch the list of employees when the component mounts
    const fetchEmployees = async () => {
      try {
        const response = await api.get("/employees"); // Assuming you have an endpoint for fetching employees
        setEmployees(response.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div>
      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            {/* Add more table headers for other employee details */}
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              {/* Add more table cells for other employee details */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
