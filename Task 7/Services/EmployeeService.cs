using EmpService.Contracts;
using EmpService.Models;
using PetaPoco;
using Services.Constants;

namespace Services
{
    public class EmployeeService : IEmployeeService
    {
        private readonly Database _db;
       public EmployeeService(Database db)
        {
            _db = db;
        }
        public async Task<object> AddEmployee(Employee employee)
        {
            try
            {
                var add = await _db.InsertAsync(employee);
                return add;
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
                var employees = await _db.FetchAsync<Employee>(EmployeeQuery.GetEmployees);
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
                var employee = await _db.SingleOrDefaultAsync<Employee>(EmployeeQuery.GetEmployeeById, id);
                return employee;
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public async Task<object> UpdateEmployee(Employee employee)
        {
            try 
            {
                var update = await Task.Run(() => _db.Update(employee));
                return update;
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public async Task<int> DeleteEmployee(int id)
        {
            try
            {
                var dlt = await Task.Run(() => _db.Delete<Employee>(id));
                return dlt;
            }
            catch (Exception ex)
            {
                throw;
            }
        }
    }
}
