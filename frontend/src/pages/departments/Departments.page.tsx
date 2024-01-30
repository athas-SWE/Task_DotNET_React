import { useEffect, useState } from "react";
import "./departments.scss";
import httpModule from "../../helpers/http.module";
import { IDepartment } from "../../types/global.typing";
import { Button, CircularProgress } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import DepartmentsGrid from "../../components/department/DepartmentGrid.component";

const Departments = () => {
  const [departments, setDepartments] = useState<IDepartment[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const redirect = useNavigate();

  useEffect(() => {
    setLoading(true);
    httpModule
      .get<IDepartment[]>("/Department/Get")
      .then((response) => {
        setDepartments(response.data);
        setLoading(false);
      })
      .catch((error) => {
        alert("Error");
        console.log(error);
        setLoading(false);
      });
  }, []);

  //    console.log(departments);

  return (
    <div className="content comapnies">
      <div className="heading">
        <h2>Departments</h2>
        <Button variant="outlined" onClick={() => redirect("/departments/add")}>
          <Add />
        </Button>
      </div>
      {loading ? (
        <CircularProgress size={100} />
      ) : departments.length === 0 ? (
        <h1>No Department</h1>
      ) : (
        <DepartmentsGrid data={departments} />
      )}
    </div>
  );
};

export default Departments;
