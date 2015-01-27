using System;
using System.Collections.Generic;
using System.Linq;

namespace WebPD.API.Entities.Repositories
{
    public class CustomersRepository : EntityRepository
    {
        public IEnumerable<Customer> List()
        {
            return _entitiesContext.Set<Customer>().ToList();
        }

        public IEnumerable<Customer> ListWithParams(Customer customer)
        {
            var res = _entitiesContext.Set<Customer>().Where(cust =>
                ((String.IsNullOrEmpty(customer.CustomerID) || cust.CustomerID.Contains(customer.CustomerID)) &&
                (String.IsNullOrEmpty(customer.CompanyName) || cust.CompanyName.Contains(customer.CompanyName)) &&
                (String.IsNullOrEmpty(customer.Country) || cust.Country.Contains(customer.Country)))
                ).ToList();
            return res;
        }
    }
}