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

        public Employee Details(int id)
        {
            var empl = _entitiesContext.Employees.Include(emp => emp.Orders).FirstOrDefault(emp => emp.EmployeeID == id);
            return empl;
        }
    }
}