using System;
using System.Collections.Generic;
using System.Linq;

namespace WebPD.API.Entities.Repositories
{
    public class EmployeRepository : EntityRepository
    {
        public EmployeRepository()
        {

        }
        public IEnumerable<Employe> List()
        {
            return _entitiesContext.Set<Employe>().ToList();
        }
    }
}