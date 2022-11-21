using EmpService.Contracts;
using EmpService.Models;
using Microsoft.AspNetCore.Mvc;


namespace Address_Book.Controllers
{
    public class EmployeeController : Controller
    {
        private readonly IEmployeeService _employeeService;
        public EmployeeController(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }
        [HttpPost("add_employee")]
        public IActionResult AddEmployee([FromBody] Employee employee)
        {
            if(employee==null)
            {
                return BadRequest();
            }
            else
            {
                var add= _employeeService.AddEmployee(employee);
                if(add.IsFaulted)
                {
                    return BadRequest();
                }
                return Ok(new{
                    statusCode = 200,
                    message = "Employee Added Successfully",
                });
            }
        }

        [HttpPut("update_employee")]
        public IActionResult UpdateEmployee([FromBody] Employee employee)
        {
            if (employee == null)
            {
                return BadRequest();
            }
            else
            {
                var update=_employeeService.UpdateEmployee(employee);
                if(update.IsFaulted)
                {
                    return BadRequest();
                }
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "Employee Updated Successfully"
                });
            }
        }
        [HttpDelete("delete_employee/{id}")]
        public IActionResult DeleteEmployee(int id)
        {
            
            var dlt=_employeeService.DeleteEmployee(id);
            if(dlt.IsFaulted)
            {
                return BadRequest();
            }
            return Ok(new
            {
                StatusCode = 200,
                Message = "Employee Deleted Successfully",
            });
        }
        [HttpGet("employees")]
        public IActionResult GetEmployees()
        {
            var employees =_employeeService.GetEmployees();
            return Ok(new
            {
                StatusCode = 200,
                Employees = employees
            });
        }

        [HttpGet("employee/{id}")]
        public IActionResult GetEmployee(int id)
        {
            if (id == 0)
            {
                return BadRequest();
            }
            else
            {
                var employee = _employeeService.GetEmployeeById(id);
                return Ok(new
                {
                    StatusCode = 200,
                    Employee = employee
                });
            }
        }
    }
}
