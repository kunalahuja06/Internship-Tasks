using EmpService.Contracts;
using EmpService.Models;
using Services;

namespace AddressBook.XUnitTests
{
    public class EmployeeServiceTest
    {
        private readonly IEmployeeService _employeeService;
        public EmployeeServiceTest()
        {
            _employeeService = new EmployeeService();
        }

        [Fact]
        public async Task GetEmployeeTest()
        {
            var employees = await _employeeService.GetEmployees();
            Assert.NotNull(employees);
            Assert.True(employees.Count > 0);
        }
        
        [Theory]
        [InlineData(1)]
        [InlineData(2)]
        public async Task GetEmployeeByIdTest(int id)
        {
            var employee = await _employeeService.GetEmployeeById(id);
            Assert.NotNull(employee);
            Assert.True(employee.Id == id);
        }
    }
}
