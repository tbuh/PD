using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;

namespace WebPD.API.Entities.Repositories
{
    public class EmployeeRepository : EntityRepository<Employee>
    {
        public EmployeeRepository()
        {

        }

        public Employee Details(int id)
        {
            var result = _entitiesContext.Employees.Where(empl => empl.EmployeeID == id).Select(empl => new
            {
                Employee = empl,
                Orders = empl.Orders.OrderBy(o => o.OrderDate).Take(10)
            });

            var employee = result.FirstOrDefault();
            return employee.Employee;
        }
    }
}