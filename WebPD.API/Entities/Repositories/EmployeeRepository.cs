using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;

namespace WebPD.API.Entities.Repositories
{
    public class EmployeeRepository : EntityRepository
    {
        public EmployeeRepository()
        {

        }
        public IEnumerable<Employee> List()
        {
            return _entitiesContext.Employees;
        }
    }
}