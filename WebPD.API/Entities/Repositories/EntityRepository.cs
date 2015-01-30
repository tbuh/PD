using System;
using System.Collections.Generic;
using System.Linq;

namespace WebPD.API.Entities.Repositories
{
    public class EntityRepository<TEntity>
        where TEntity : class
    {
        protected EntitiesContext _entitiesContext;
        public EntityRepository()
        {
            _entitiesContext = new EntitiesContext();
        }

        public IEnumerable<TEntity> List()
        {
            return _entitiesContext.Set<TEntity>();
        }

        public void Save(TEntity entity)
        { 
            _entitiesContext.Entry<TEntity>(entity).State = System.Data.Entity.EntityState.Modified;
            _entitiesContext.SaveChanges();
        }
    }
}