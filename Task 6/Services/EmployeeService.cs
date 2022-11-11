using EmpService.Contracts;
using EmpService.Data;
using EmpService.Models;

namespace Services
{
    public class EmployeeService : IEmployeeService
    {
        private readonly EmployeeDbContext _employeeContext;
        public EmployeeService(EmployeeDbContext employeeContext)
        {
            _employeeContext = employeeContext;
        }
        public void AddEmployee(Employee employee)
        {
            _employeeContext.Employees.Add(employee);
            _employeeContext.SaveChanges();
        }

        public List<Employee> GetEmployees()
        {
            return _employeeContext.Employees.ToList();
        }

        public  Task<Employee> GetEmployeeById(int id)
        {
            var employee = _employeeContext.Employees.Find(id);
            return Task.FromResult(employee);
        }

        public void UpdateEmployee(Employee employee)
        {
            var user = _employeeContext.Employees.Find(employee.Id);
            if (user != null)
            {
                _employeeContext.Entry(user).CurrentValues.SetValues(employee);
                _employeeContext.SaveChanges();
            }
        }

        public void DeleteEmployee(int id)
        {
            var user=_employeeContext.Employees.Find(id);
            if(user!=null)
            {
                _employeeContext.Remove(user);
                _employeeContext.SaveChanges();
            }
        }
    }
}
