using EmpService.Contracts;
using EmpService.Data;
using EmpService.Models;
using Microsoft.EntityFrameworkCore;

namespace Services
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
                await Task.Run(() =>{
                    _employeeContext.Employees.Add(employee);
                    _employeeContext.SaveChanges();
                });
            }
            catch (Exception ex)
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
            catch(Exception ex)
            {
                throw;
            }
        }

        public async Task UpdateEmployee(Employee employee)
        {
            try
            {
                var user = await _employeeContext.Employees.FindAsync(employee.Id);
                if (user != null)
                {
                    _employeeContext.Entry(user).CurrentValues.SetValues(employee);
                    _employeeContext.SaveChanges();
                }
                return;
            }
            catch(Exception ex)
            {
                throw;
            }
        }

        public async Task DeleteEmployee(int id)
        {
            try
            {
                var user = await _employeeContext.Employees.FindAsync(id);
                if (user != null)
                {
                    _employeeContext.Remove(user);
                    _employeeContext.SaveChanges();
                }
                return;
            }
            catch (Exception ex)
            {
                throw;
            }
        }
    }
}
