using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tronica.DTOs;
using Tronica.Models.Domains;

namespace Tronica.Helpers
{
    public class AutoMapperProfiles: Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Employee, EmployeeDTO>()
                .ForMember(dest => dest.DepartmentName, options =>
                     options.MapFrom(src => src.Department.Name));

            CreateMap<Department, DepartmentDTO>();
        }
    }
}
