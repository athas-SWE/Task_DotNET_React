import React from "react";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import DepartmentForm from "./components/Department/DepartmentForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import DepartmentForm from "./Components/Department/DepartmentForm";

import DepartmentList from "./Components/Department/DepartmentList";
import EmployeeForm from "./Components/Employee/EmployeeForm";
import EmployeeList from "./Components/Employee/EmployeeList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/departments" element={<DepartmentList />} />
        <Route path="/departments/add" element={<DepartmentForm />} />
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/employees/add" element={<EmployeeForm />} />
      </Routes>
    </Router>
  );
};

export default App;
