using System;
using System.Collections.Generic;
using System.Linq;

namespace WebPD.API.Entities.Repositories
{
    public class EntityRepository
    {
        protected EntitiesContext _entitiesContext;
        public EntityRepository()
        {
            _entitiesContext = new EntitiesContext();
        }
    }
}