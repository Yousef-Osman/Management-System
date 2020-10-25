using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tronica.Models.Domains;

namespace Tronica.Repository
{
    public interface IEmployeeRepository: IGenericRepository<Employee>
    {
        Task<IEnumerable<Employee>> GetEmployeeDataAsync();
    }
}
