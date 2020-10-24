using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Tronica.Models.Domains;
using Tronica.Repository;

namespace Tronica.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly IGenericRepository<Employee> _employeeRepository;
        private readonly IGenericRepository<Department> _departmentRepository;

        public EmployeesController(IGenericRepository<Employee> employeeRepository,
                                   IGenericRepository<Department> departmentRepository)
        {
            _employeeRepository = employeeRepository;
            _departmentRepository = departmentRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetEmployees()
        {
            var employees = await _employeeRepository.GetAllAsync();
            return Ok(employees);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetEmployee(int id)
        {
            var employee = await _employeeRepository.GetAsync(id);
            if (employee == null)
                return BadRequest("User doesn't exist");

            return Ok(employee);
        }

        [HttpPost]
        public async Task<IActionResult> AddEmployee(Employee employee)
        {
            if (!ModelState.IsValid) 
                return BadRequest();

            try
            {
                await _employeeRepository.AddAsync(employee);
                await _employeeRepository.SaveAllAsync();
                return StatusCode(201);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
        }

        [HttpPut]
        public async Task<IActionResult> updateEmployee(Employee employee)
        {
            if (!ModelState.IsValid) 
                return BadRequest();

            try
            {
                _employeeRepository.Update(employee);
                await _employeeRepository.SaveAllAsync();
                return Ok();
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
        }

        [HttpDelete("{id}")]
        public async Task <IActionResult> DeleteEmployee(int id)
        {
            var employee = await _employeeRepository.GetAsync(id);
            if (employee == null) 
                return BadRequest("User doesn't exist");

            try
            {
                _employeeRepository.Delete(employee);
                await _employeeRepository.SaveAllAsync();
                return Ok();
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
        }
    }
}
