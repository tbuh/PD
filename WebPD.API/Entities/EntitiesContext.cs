using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.Common;
using System.Data.Entity;
using System.Data.SqlClient;
using System.Linq;

namespace WebPD.API.Entities
{
    public class EntitiesContext : DbContext
    {
        public EntitiesContext()
            : base(GetConnection("DefaultConnection"), contextOwnsConnection: true)
        {
        }

        public DbSet<Employee> Employees { get; set; }

        private static DbConnection GetConnection(string connectionStringName)
        {
            var setting = ConfigurationManager.ConnectionStrings[connectionStringName];
            var connection = new SqlConnection(setting.ConnectionString);
            return connection;
        }
    }
}