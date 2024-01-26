import axios from "axios";
import { useEffect, useState } from "react";

function Employee() {
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState(0); // New state for age
  const [salary, setSalary] = useState("");
  const [department, setDepartment] = useState("");
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    (async () => await load())();
  }, []);

  async function load() {
    try {
      const result = await axios.get(
        "https://localhost:7211/api/Employee/GetEmployee"
      );
      setEmployees(result.data);
      console.log(result.data);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  }

  async function save(event) {
    event.preventDefault();
    try {
      // ... your existing code ...
    } catch (error) {
      console.error("Error saving employee:", error);
      alert("Failed to save employee. Check the console for details.");
    }
  }

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("https://localhost:7211/api/Employee/AddEmployee", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        dob: dob,
        age: calculateAge(dob), // Calculate age based on the date of birth
        salary: salary,
        department: department,
      });
      alert("Employee Registration Successfully");
      setId("");
      setFirstName("");
      setLastName("");
      setEmail("");
      setDob("");
      setAge(0);
      setSalary("");
      setDepartment("");
      load();
    } catch (err) {
      alert(err);
    }
  }

  // Function to calculate age from date of birth
  function calculateAge(dob) {
    const birthDate = new Date(dob);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    return age;
  }

  async function editEmployee(employee) {
    setFirstName(employee.firstName);
    setLastName(employee.lastName);
    setEmail(employee.email);
    setDob(employee.dob);
    setAge(calculateAge(employee.dob));
    setSalary(employee.salary);
    setDepartment(employee.department);
    setId(employee.id);
  }

  async function deleteEmployee(id) {
    await axios.delete(
      "https://localhost:7211/api/Employee/UpdateEmployee/" + id
    );
    alert("Employee deleted Successfully");
    setId("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setDob("");
    setAge(0);
    setSalary("");
    setDepartment("");
    load();
  }

  async function update(event) {
    event.preventDefault();
    try {
      await axios.patch(
        "https://localhost:7211/api/Employee/UpdateEmployee/" +
          employees.find((e) => e.id === id).id || id,
        {
          id: id,
          firstName: firstName,
          lastName: lastName,
          email: email,
          dob: dob,
          age: calculateAge(dob),
          salary: salary,
          department: department,
        }
      );
      alert("Registration Updated");
      setId("");
      setFirstName("");
      setLastName("");
      setEmail("");
      setDob("");
      setAge(0);
      setSalary("");
      setDepartment("");
      load();
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div>
      <h1>Employee Details</h1>
      <div className="container mt-4">
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="id"
              hidden
              value={id}
              onChange={(event) => {
                setId(event.target.value);
              }}
            />

            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              value={firstName}
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              value={lastName}
              onChange={(event) => {
                setLastName(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>Date of Birth</label>
            <input
              type="date"
              className="form-control"
              id="dob"
              value={dob}
              onChange={(event) => {
                setDob(event.target.value);
                setAge(calculateAge(event.target.value));
              }}
            />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input
              type="number"
              className="form-control"
              id="age"
              value={age}
              readOnly
            />
          </div>
          <div className="form-group">
            <label>Salary</label>
            <input
              type="text"
              className="form-control"
              id="salary"
              value={salary}
              onChange={(event) => {
                setSalary(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>Department</label>
            <input
              type="text"
              className="form-control"
              id="department"
              value={department}
              onChange={(event) => {
                setDepartment(event.target.value);
              }}
            />
          </div>
          <div>
            <button className="btn btn-primary mt-4" onClick={save}>
              Register
            </button>
            <button className="btn btn-warning mt-4" onClick={update}>
              Update
            </button>
          </div>
        </form>
      </div>
      <br />

      <table className="table table-dark" align="center">
        <thead>
          <tr>
            <th scope="col">Employee Id</th>
            <th scope="col">Employee Name</th>
            <th scope="col">Designation</th>
            <th scope="col">Option</th>
          </tr>
        </thead>
        {employees.map(function fn(employee) {
          return (
            <tbody key={employee.id}>
              <tr>
                <th scope="row">{employee.id} </th>
                <td>
                  {employee.firstName} {employee.lastName}
                </td>
                <td>{employee.designation}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => editEmployee(employee)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deleteEmployee(employee.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
export default Employee;
