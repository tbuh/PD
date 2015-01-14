using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebPD.API.Entities;
using WebPD.API.Entities.Repositories;

namespace WebPD.API.Controllers
{
    [RoutePrefix("api/employees")]
    public class EmployeesController : ApiController
    {

        private EmployeeRepository _employeeRepository;
        public EmployeesController()
        {
            _employeeRepository = new EmployeeRepository();
        }

        // GET api/Employees        
        [Authorize]
        [HttpGet]
        public IEnumerable<Employee> Get()
        {
            return _employeeRepository.List();
        }


    }
}
