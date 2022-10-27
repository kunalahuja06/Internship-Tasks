using Address_Book.Models;
using Microsoft.EntityFrameworkCore;

namespace Address_Book.Data
{
    public class EmployeeDbContext : DbContext
    {
        public EmployeeDbContext(DbContextOptions<EmployeeDbContext>options):base(options)
        {

        }
        public DbSet<employeeModel> Employees { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<employeeModel>().ToTable("employee");
        }
    }
}
