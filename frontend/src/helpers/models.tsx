export interface ExpenseDTO {
	id: number;
	name: string;
	price: number;
	percentage_Markup: number;
	final_Price: number;
}

// Define the type for the API response
export interface ExpensesResponse {
	expenses: ExpenseDTO[];
	totalExpenses: number;
}

// Define the type for the ExpensesCreateDTO
export interface ExpensesCreateDTO {
	name: string;
	price: number | null;
	percentage_Markup: number | null;
}
