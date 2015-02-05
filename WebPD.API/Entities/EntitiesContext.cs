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
        public DbSet<Customer> Customers { get; set; }
        public EntitiesContext()
            : base(GetConnection("DefaultConnection"), contextOwnsConnection: true)
        {
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Order>()
                .HasKey(o => o.OrderID)
                .HasRequired(o => o.Employee)
                .WithMany(e => e.Orders)
                .HasForeignKey(o => o.EmployeeId); 
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