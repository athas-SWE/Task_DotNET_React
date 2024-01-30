import { useState } from "react";
import "./departments.scss";
import { ICreateDepartmentDto } from "../../types/global.typing";
import {} from "@mui/material";
import TextField from "@mui/material/TextField/TextField";
import FormControl from "@mui/material/FormControl/FormControl";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import Select from "@mui/material/Select/Select";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import Button from "@mui/material/Button/Button";
import { useNavigate } from "react-router-dom";
import httpModule from "../../helpers/http.module";

const AddDepartment = () => {
  const [department, setDepartment] = useState<ICreateDepartmentDto>({
    name: "",
    code: "",
  });
  const redirect = useNavigate();

  const handleClickSaveBtn = () => {
    if (department.name === "" || department.code === "") {
      alert("Fill all fields");
      return;
    }
    httpModule
      .post("/Department/Create", department)
      .then((responst) => redirect("/departments"))
      .catch((error) => console.log(error));
  };

  const handleClickBackBtn = () => {
    redirect("/departments");
  };

  return (
    <div className="content">
      <div className="add-department">
        <h2>Add New Department</h2>
        <TextField
          autoComplete="off"
          label="Department Name"
          variant="outlined"
          value={department.name}
          onChange={(e) =>
            setDepartment({ ...department, name: e.target.value })
          }
        />
        <FormControl fullWidth>
          <InputLabel>Department Code</InputLabel>
          <Select
            value={department.code}
            label="Department Code"
            onChange={(e) =>
              setDepartment({ ...department, code: e.target.value })
            }
          >
            <MenuItem value="IT1010">IT1010</MenuItem>
            <MenuItem value="IT2020">IT2020</MenuItem>
            <MenuItem value="IT3030">IT3030</MenuItem>
          </Select>
        </FormControl>
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

export default AddDepartment;
