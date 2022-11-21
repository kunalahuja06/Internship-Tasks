using EmpService.Models;

namespace EmpService.Contracts
{
    public interface IEmployeeService
    {
        Task<object> AddEmployee(Employee employee);
        Task<object> UpdateEmployee(Employee employee);
        Task<List<Employee>> GetEmployees();
        Task<int> DeleteEmployee(int id);
        Task<Employee> GetEmployeeById(int id);
    }
}
