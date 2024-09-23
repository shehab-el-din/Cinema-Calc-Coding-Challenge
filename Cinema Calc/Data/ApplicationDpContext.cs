using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Cinema_Calc.Models;
using Microsoft.EntityFrameworkCore;

namespace Cinema_Calc.Data
{
    public class ApplicationDpContext : DbContext
    {
        public ApplicationDpContext(DbContextOptions<ApplicationDpContext> options) : base(options)
        {
        }
        public DbSet<Expenses> Expenses { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            var expensesSeedData = new List<Expenses>();
            for (int i = 1; i < 10; i++)
            {
                expensesSeedData.Add(new Expenses
                {
                    Id = i,
                    Name = "Expense " + i,
                    Price = i * 100,
                    Percentage_Markup = i + 10
                });
            }
            modelBuilder.Entity<Expenses>().HasData(expensesSeedData);
            base.OnModelCreating(modelBuilder);
        }
    }
}