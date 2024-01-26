import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DepartmentForm from "./components/Department/DepartmentForm";
import DepartmentList from "./components/Department/DepartmentList";
import EmployeeForm from "./components/Employee/EmployeeForm";
import EmployeeList from "./components/Employee/EmployeeList";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/departments" exact component={DepartmentList} />
        <Route path="/departments/add" component={DepartmentForm} />
        <Route path="/employees" exact component={EmployeeList} />
        <Route path="/employees/add" component={EmployeeForm} />
      </Switch>
    </Router>
  );
};

export default App;
