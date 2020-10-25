using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tronica.Models.Domains;

namespace Tronica.Models.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options) { }

        public DbSet<Employee> Employees { get; set; }
        public DbSet<Department> Departments { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Department>().HasData(new Department { Id = 1, Name = "IT" });
            builder.Entity<Department>().HasData(new Department { Id = 2, Name = "HR" });
            builder.Entity<Department>().HasData(new Department { Id = 3, Name = "Logistics" });
            builder.Entity<Department>().HasData(new Department { Id = 4, Name = "PR" });
            builder.Entity<Department>().HasData(new Department { Id = 5, Name = "Sales" });

            builder.Entity<Employee>().HasData(new Employee { Id = 1, Name = "Hossam Ali", Email = "hossam@gmail.com", Age = 25, DepartmentId = 3 });
            builder.Entity<Employee>().HasData(new Employee { Id = 2, Name = "Ashraf Kamal", Email = "ashraf@gmail.com", Age = 42, DepartmentId = 2 });
            builder.Entity<Employee>().HasData(new Employee { Id = 3, Name = "Mohamed Yasser", Email = "mohamed@gmail.com", Age = 28, DepartmentId = 1 });
            builder.Entity<Employee>().HasData(new Employee { Id = 4, Name = "Riad Lotfy", Email = "hossam@gmail.com", Age = 22, DepartmentId = 5 });
        }
    }
}
