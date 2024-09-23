using Cinema_Calc.Data;
using Cinema_Calc.Models;
using Cinema_Calc.Repositories.IRepositories;
using Microsoft.EntityFrameworkCore;
namespace Cinema_Calc.Repositories
{
    public class ExpensesRepository : IExpensesRepository
    {
        private readonly ApplicationDpContext _context;
        public ExpensesRepository(ApplicationDpContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Expenses>> GetExpenses()
        {
            return await _context.Expenses.ToListAsync();
        }

        public async Task<Expenses> GetExpensesById(int id)
        {
            return await _context.Expenses.FindAsync(id);
        }
        public async Task<Expenses> AddExpenses(Expenses expenses)
        {
            _context.Expenses.Add(expenses);
            await _context.SaveChangesAsync();
            return expenses;
        }

        public async Task<Expenses> UpdateExpenses(Expenses expenses)
        {
            _context.Expenses.Update(expenses);
            await _context.SaveChangesAsync();
            return expenses;
        }

        public async Task DeleteExpenses(int id)
        {
            var expenses = await _context.Expenses.FindAsync(id);
            if (expenses != null)
            {
                _context.Expenses.Remove(expenses);
                await _context.SaveChangesAsync();
            }
        }
    }
}