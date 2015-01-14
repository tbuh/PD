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
    }
}