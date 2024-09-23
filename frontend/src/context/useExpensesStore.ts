import { create } from "zustand";
import { ExpenseDTO, ExpensesCreateDTO, ExpensesResponse } from "../helpers/models";

interface ExpensesStore {
	expenses: ExpenseDTO[];
	totalExpenses: number;
	loading: boolean;
	editingExpense: ExpenseDTO | null;
	fetchExpenses: () => Promise<void>;
	createExpense: (expense: ExpensesCreateDTO) => Promise<void>;
	updateExpense: (expense: ExpenseDTO) => Promise<void>;
	deleteExpense: (id: number) => Promise<void>;
	setEditingExpense: (expense: ExpenseDTO | null) => void;
}

export const useExpensesStore = create<ExpensesStore>((set) => ({
	expenses: [],
	totalExpenses: 0,
	loading: false,
	editingExpense: null,

	fetchExpenses: async () => {
		set({ loading: true });
		const response = await fetch("http://localhost:5044/api/Expenses");
		const data: ExpensesResponse = await response.json();
		set({ expenses: data.expenses, totalExpenses: data.totalExpenses, loading: false });
	},

	createExpense: async (expense: ExpensesCreateDTO) => {
		await fetch("http://localhost:5044/api/expenses", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(expense),
		});
		set((state) => ({ ...state, totalExpenses: state.totalExpenses + expense.price! }));
		await useExpensesStore.getState().fetchExpenses();
	},

	updateExpense: async (expense: ExpenseDTO) => {
		await fetch(`http://localhost:5044/api/expenses/${expense.id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(expense),
		});
		await useExpensesStore.getState().fetchExpenses();
	},

	deleteExpense: async (id: number) => {
		await fetch(`http://localhost:5044/api/expenses/${id}`, {
			method: "DELETE",
		});
		await useExpensesStore.getState().fetchExpenses();
	},

	setEditingExpense: (expense: ExpenseDTO | null) => {
		set({ editingExpense: expense });
	},
}));
