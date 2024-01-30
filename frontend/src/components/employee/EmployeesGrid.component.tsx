import "./employees-grid.scss";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { GridColDef } from "@mui/x-data-grid/models";
import moment from "moment";
import React from "react";
//import { baseUrl } from "../../constants/url.constants";
import { IEmployee } from "../../types/global.typing";

const calculateAge = (dob: string) => {
  const today = moment();
  const birthDate = moment(dob);
  return today.diff(birthDate, "years");
};

const column: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "firstName", headerName: "First Name", width: 120 },
  { field: "lastName", headerName: "Last Name", width: 120 },
  { field: "email", headerName: "Email", width: 150 },
  { field: "phone", headerName: "Phone", width: 150 },
  { field: "dob", headerName: "Date of Birth", width: 150 },
  {
    field: "age",
    headerName: "Age",
    width: 100,
    valueGetter: (params) => calculateAge(params.row.dob),
  },
  { field: "salary", headerName: "Salary", width: 120 },
  { field: "department", headerName: "Department", width: 150 },
];

interface IEmployeesGridProps {
  data: IEmployee[];
}

const EmployeesGrid = ({ data }: IEmployeesGridProps) => {
  return (
    <Box sx={{ width: "100%", height: 450 }} className="jobs-grid">
      <DataGrid
        rows={data}
        columns={column}
        getRowId={(row) => row.id}
        rowHeight={50}
      />
    </Box>
  );
};

export default EmployeesGrid;
