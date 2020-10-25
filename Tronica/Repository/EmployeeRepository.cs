using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tronica.Models.Data;
using Tronica.Models.Domains;

namespace Tronica.Repository
{
    public class EmployeeRepository : GenericRepository<Employee>, IEmployeeRepository
    {
        public EmployeeRepository(ApplicationDbContext context) : base(context) { }

        public async Task<IEnumerable<Employee>> GetEmployeeDataAsync()
        {
            return await _context.Employees.Include(a => a.Department).ToListAsync();
        }
    }
}
