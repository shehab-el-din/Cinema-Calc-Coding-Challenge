using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cinema_Calc.Models
{
    public class ExpensesModifyDTO
    {
        public string Name { get; set; }
        public decimal? Price { get; set; }
        public decimal? Percentage_Markup { get; set; }
    }
}