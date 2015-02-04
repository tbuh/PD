using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebPD.API.Entities
{
    public class Employee
    {
        public int EmployeeID { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string City { get; set; }
        public string Extension { get; set; }
        public string Country { get; set; }

        public ICollection<Order> Orders { get; set; }
    }
}