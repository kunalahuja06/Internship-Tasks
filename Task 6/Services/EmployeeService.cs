using EmpService.Contracts;
using EmpService.Data;
using EmpService.Models;
using Microsoft.EntityFrameworkCore;

namespace EmpService
{
    public class EmployeeService : IEmployeeService
    {
        private readonly EmployeeDbContext _employeeContext;
        public EmployeeService(EmployeeDbContext employeeContext)
        {
            _employeeContext = employeeContext;
        }
        public async Task AddEmployee(Employee employee)
        {
            try
            {
                await _employeeContext.Employees.AddAsync(employee);
                await _employeeContext.SaveChangesAsync();
            }
            catch(Exception ex)
            {
                throw;
            }
        }

        public async Task<List<Employee>> GetEmployees()
        {
            try
            {
                var employees = await _employeeContext.Employees.ToListAsync();
                return employees;
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public async Task<Employee> GetEmployeeById(int id)
        {
            try
            {
                var employee = await _employeeContext.Employees.FindAsync(id);
                return employee;
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public async Task UpdateEmployee(Employee employee)
        {
        }

        public async Task DeleteEmployee(int id)
        {
        }
    }
}
