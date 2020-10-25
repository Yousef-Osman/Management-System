using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Tronica.DTOs;
using Tronica.Models.Domains;
using Tronica.Repository;

namespace Tronica.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentsController : ControllerBase
    {
        private readonly IGenericRepository<Department> _departmentRepository;
        private readonly IMapper _mapper;

        //using generic repository for basic crud operations
        public DepartmentsController(IGenericRepository<Department> departmentRepository,
                                     IMapper mapper)
        {
            _departmentRepository = departmentRepository;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetDepartments()
        {
            var departments = await _departmentRepository.GetAllAsync();

            //using auto mapper to remove employee list from the response object
            var mappeddepartments = _mapper.Map<IEnumerable<DepartmentDTO>>(departments);
            return Ok(mappeddepartments);
        }
    }
}
