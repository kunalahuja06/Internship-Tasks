using Address_Book.Data;
using Address_Book.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Address_Book.Controllers
{
    public class EmployeeController : Controller
    {
        private readonly EmployeeDbContext _employeeContext;
        public EmployeeController(EmployeeDbContext employeeContext)
        {
            _employeeContext = employeeContext;
        }
        [HttpPost("add_employee")]
        public IActionResult AddEmployee([FromBody] employeeModel employee)
        {
            if (employee == null)
            {
                return BadRequest();
            }
            else
            {
                _employeeContext.Employees.Add(employee);
                _employeeContext.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "Employee added successfully"
                });
            }
        }

        [HttpPut("update_employee")]
        public IActionResult UpdateEmployee([FromBody] employeeModel employee)
        {
            if (employee == null)
            {
                return BadRequest();
            }
            var user = _employeeContext.Employees.AsNoTracking().FirstOrDefault(x => x.ID == employee.ID);
            if (user==null)
            {
                return NotFound(new
                {
                    StatusCode = 404,
                    Message = "User Not Found!"
                });
            }
            else
            {
                _employeeContext.Entry(employee).State = EntityState.Modified;
                _employeeContext.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "Employee updated successfully"
                });
            }
        }
        [HttpGet("employees")]
        public IActionResult GetEmployees()
        {
            var employees = _employeeContext.Employees.AsQueryable();
            return Ok(new
            {
                StatusCode = 200,
                Employees = employees
            });
        }

        [HttpGet("employee/id")]
        public IActionResult GetEmployee(int id)
        {
            var employee = _employeeContext.Employees.Find(id);
            if (employee == null)
            {
                return NotFound(new
                {
                    StatusCode=200,
                    Message="Employee Not Found!"
                });
            }
            else
            {
                return Ok(new
                {
                    StatusCode = 200,
                    Employee = employee
                });
            }
        }
    }
}
