namespace Cinema_Calc.Models
{
    public class ExpensesDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public decimal Percentage_Markup { get; set; }
        public decimal Final_Price { get; set; }
    }
}