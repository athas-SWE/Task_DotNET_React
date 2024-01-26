import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // Replace with your actual backend API URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Department API calls
export const addDepartment = (departmentData) =>
  api.post("/departments", departmentData);
export const getDepartments = () => api.get("/departments");

// Employee API calls
export const addEmployee = (employeeData) =>
  api.post("/employees", employeeData);
export const getEmployees = () => api.get("/employees");

// Other API calls as needed

export default api;
