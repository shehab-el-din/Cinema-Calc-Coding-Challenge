using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Cinema_Calc.Models;

namespace Cinema_Calc.Data
{
    public class MappingConfig : Profile
    {
        public MappingConfig()
        {
            CreateMap<Expenses, ExpensesDTO>().ReverseMap();
            CreateMap<ExpensesModifyDTO, Expenses>().ReverseMap();
        }
    }
}