using Microsoft.AspNetCore.Mvc;
using Task_EMPLOYEE.Models;
//using Task_EMPLOYEE.Services;

[Route("api/[controller]")]
[ApiController]
public class EmployeeController : ControllerBase
{
    private readonly IEmployeeService _employeeService;

    public EmployeeController(IEmployeeService employeeService)
    {
        _employeeService = employeeService;
    }

    [HttpGet]
    public IActionResult GetEmployees()
    {
        var employees = _employeeService.GetEmployees();
        return Ok(employees);
    }

    [HttpGet("{id}")]
    public IActionResult GetEmployeeById(int id)
    {
        var employee = _employeeService.GetEmployeeById(id);

        if (employee == null)
        {
            return NotFound("Employee not found");
        }

        return Ok(employee);
    }

    [HttpPost]
    public IActionResult AddEmployee([FromBody] Employee employee)
    {
        _employeeService.AddEmployee(employee);
        return Ok("Employee added successfully");
    }

    [HttpPut("{id}")]
    public IActionResult UpdateEmployee(int id, [FromBody] Employee employee)
    {
        var existingEmployee = _employeeService.GetEmployeeById(id);

        if (existingEmployee == null)
        {
            return NotFound("Employee not found");
        }

        // Update the existing employee with the new values
        existingEmployee.FirstName = employee.FirstName;
        existingEmployee.LastName = employee.LastName;
        existingEmployee.Email = employee.Email;
        existingEmployee.DateOfBirth = employee.DateOfBirth;
        existingEmployee.Salary = employee.Salary;
        existingEmployee.DepartmentId = employee.DepartmentId;

        _employeeService.UpdateEmployee(existingEmployee);

        return Ok("Employee updated successfully");
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteEmployee(int id)
    {
        var existingEmployee = _employeeService.GetEmployeeById(id);

        if (existingEmployee == null)
        {
            return NotFound("Employee not found");
        }

        _employeeService.DeleteEmployee(existingEmployee);

        return Ok("Employee deleted successfully");
    }
}
