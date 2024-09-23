using Cinema_Calc.Models;

namespace Cinema_Calc.Repositories.IRepositories
{
    public interface IExpensesRepository
    {
        Task<IEnumerable<Expenses>> GetExpenses();
        Task<Expenses> GetExpensesById(int id);
        Task<Expenses> AddExpenses(Expenses expenses);
        Task<Expenses> UpdateExpenses(Expenses expenses);
        Task DeleteExpenses(int id);
    }
}