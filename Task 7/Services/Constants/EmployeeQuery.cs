namespace Services.Constants
{
    static public class EmployeeQuery
    {
        public const string GetEmployees = "SELECT * FROM employee";
        public const string GetEmployeeById = "SELECT * FROM employee WHERE id = @0";
    }
}
