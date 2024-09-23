using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Cinema_Calc.Models
{
    public class Expenses
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public decimal Price { get; set; }
        public decimal Percentage_Markup { get; set; }
        public decimal Final_Price
        {
            get
            {
                return Price + (Price * (Percentage_Markup / 100));
            }
        }
    }
}