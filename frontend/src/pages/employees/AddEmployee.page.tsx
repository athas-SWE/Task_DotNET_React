import { useState, useEffect } from "react";
import "./employees.scss";
import {
  IDepartment,
  ICreateEmployeeDto,
  ICreateDepartmentDto,
  ICreateJobDto,
  IJob,
} from "../../types/global.typing";

import TextField from "@mui/material/TextField/TextField";
import FormControl from "@mui/material/FormControl/FormControl";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import Select from "@mui/material/Select/Select";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import Button from "@mui/material/Button/Button";
import { useNavigate } from "react-router-dom";
import httpModule from "../../helpers/http.module";

// ... (existing imports)

const AddEmployee = () => {
  const [employee, setEmployee] = useState<ICreateEmployeeDto>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "", // New field for Date of Birth
    age: 0, // New field for Age
    salary: 0, // New field for Salary
    departmentId: "", // New field for Department
  });
  const [departments, setDepartments] = useState<IDepartment[]>([]);

  const redirect = useNavigate();

  useEffect(() => {
    // Fetch departments data
    httpModule
      .get<IDepartment[]>("/Department/Get")
      .then((response) => {
        setDepartments(response.data);
      })
      .catch((error) => {
        alert("Error");
        console.log(error);
      });
  }, []);

  const handleClickSaveBtn = () => {
    if (
      employee.firstName === "" ||
      employee.lastName === "" ||
      employee.email === "" ||
      employee.phone === "" ||
      employee.dob === "" ||
      employee.age <= 0 ||
      employee.salary <= 0 ||
      employee.departmentId === ""
    ) {
      alert("Fill all fields");
      return;
    }

    // Create a new employee object with the updated fields
    const newEmployee = {
      firstName: employee.firstName,
      lastName: employee.lastName,
      email: employee.email,
      phone: employee.phone,
      dob: employee.dob,
      age: employee.age,
      salary: employee.salary,
      departmentId: employee.departmentId,
    };

    // Perform the API call with the new employee data
    httpModule
      .post("/Employee/Create", newEmployee)
      .then((response) => redirect("/employees"))
      .catch((error) => console.log(error));
  };

  const handleClickBackBtn = () => {
    redirect("/employees");
  };

  return (
    <div className="content">
      <div className="add-employee">
        <h2>Add New Employee</h2>
        <FormControl fullWidth>
          <InputLabel>Department</InputLabel>
          <Select
            value={employee.departmentId}
            label="Department"
            onChange={(e) =>
              setEmployee({ ...employee, departmentId: e.target.value })
            }
          >
            {departments.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {/* ... (existing form fields) */}
        <TextField
          autoComplete="off"
          label="Date of Birth"
          type="date"
          variant="outlined"
          value={employee.dob}
          onChange={(e) => setEmployee({ ...employee, dob: e.target.value })}
        />
        <TextField
          autoComplete="off"
          label="Salary"
          type="number"
          variant="outlined"
          value={employee.salary}
          onChange={(e) =>
            setEmployee({ ...employee, salary: +e.target.value })
          }
        />
        <div className="btns">
          <Button
            variant="outlined"
            color="primary"
            onClick={handleClickSaveBtn}
          >
            Save
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleClickBackBtn}
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
