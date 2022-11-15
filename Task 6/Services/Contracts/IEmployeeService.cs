using EmpService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmpService.Contracts
{
    public interface IEmployeeService
    {
        Task AddEmployee(Employee employee);
        Task UpdateEmployee(Employee employee);
        Task<List<Employee>> GetEmployees();
        Task DeleteEmployee(int id);
        Task<Employee> GetEmployeeById(int id);
    }
}
