using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Cinema_Calc.Models;
using Cinema_Calc.Repositories.IRepositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Cinema_Calc.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExpensesController : ControllerBase
    {
        private readonly IExpensesRepository _expensesRepository;
        private readonly IMapper _mapper;
        private readonly ILogger<ExpensesController> _logger;

        public ExpensesController(ILogger<ExpensesController> logger, IExpensesRepository expensesRepository, IMapper mapper)
        {
            _logger = logger;
            _expensesRepository = expensesRepository;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Expenses>>> GetExpenses()
        {
            var expenses = await _expensesRepository.GetExpenses();
            var expensesDTO = _mapper.Map<IEnumerable<ExpensesDTO>>(expenses);
            decimal totalExpenses = expensesDTO.Sum(e => e.Final_Price);
            var response = new { Expenses = expensesDTO, TotalExpenses = totalExpenses };
            return Ok(response);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Expenses>> GetExpenseById(int id)
        {
            var expense = await _expensesRepository.GetExpensesById(id);
            if (expense == null)
            {
                return NotFound();
            }
            return Ok(expense);
        }

        [HttpPost]
        public async Task<ActionResult<ExpensesDTO>> AddExpenses([FromBody] ExpensesModifyDTO ExpensesModifyDTO)
        {
            var expenses = _mapper.Map<Expenses>(ExpensesModifyDTO);
            var createdExpenses = await _expensesRepository.AddExpenses(expenses);
            return CreatedAtAction(nameof(GetExpenses), new { id = createdExpenses.Id }, createdExpenses);
        }
        [HttpPut("{id}")]
        public async Task<ActionResult<ExpensesDTO>> UpdateExpenses(int id, [FromBody] ExpensesModifyDTO ExpensesModifyDTO)
        {
            var expenses = await _expensesRepository.GetExpensesById(id);

            if (expenses == null)
            {
                return NotFound();
            }
            _mapper.Map(ExpensesModifyDTO, expenses);
            var updatedExpenses = await _expensesRepository.UpdateExpenses(expenses);
            return Ok(updatedExpenses);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteExpenses(int id)
        {
            await _expensesRepository.DeleteExpenses(id);
            return NoContent();
        }

    }
}