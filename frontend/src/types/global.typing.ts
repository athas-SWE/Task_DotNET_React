export interface IDepartment {
  id: string;
  name: string;
  code: string;
  createdAt: string;
}
export interface ICreateDepartmentDto {
  name: string;
  code: string;
}
export interface IJob {
  id: string;
  title: string;
  level: string;
  departmentId: string;
  departmentName: string;
  createdAt: string;
}
export interface ICreateJobDto {
  title: string;
  level: string;
  departmentId: string;
}
export interface IEmployee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  age: number;
  salary: number;
  department: string;
  jobId: string;
  jobTitle: string;
}
export interface ICreateEmployeeDto {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  salary: number;
  department: string;
  jobId: string;
}
