import React, { useEffect, useState } from "react";
import { useExpensesStore } from "../context/useExpensesStore";
import ExpensesTable from "../components/expenses-table";
import EditModal from "../components/edit-expense";
import CreateModal from "../components/create-expense";
import Button from "../components/button";

const ExpensesList = () => {
	const { expenses, totalExpenses, fetchExpenses, createExpense, deleteExpense, editingExpense, setEditingExpense } = useExpensesStore();
	const [isCreating, setIsCreating] = useState(false);
	const [newExpense, setNewExpense] = useState({
		name: "",
		price: 0,
		percentage_Markup: 0,
	});

	useEffect(() => {
		fetchExpenses();
	}, [fetchExpenses]);

	const handleCreate = () => {
		createExpense(newExpense).then(() => {
			setNewExpense({
				name: "",
				price: 0,
				percentage_Markup: 0,
			});
		});
		setIsCreating(false);
	};

	const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		if (isCreating) {
			setNewExpense((prev) => ({ ...prev, [name]: value }));
		} else if (editingExpense) {
			useExpensesStore.getState().setEditingExpense({ ...editingExpense, [name]: value });
		}
	};

	const handleDelete = (id: number) => {
		deleteExpense(id);
	};

	return (
		<div className="container mx-auto my-8 md:text-sm text-xs">
			<h1 className="md:text-2xl text-lg font-bold mb-4 text-gray-400">Expenses</h1>
			<div className="flex justify-end mb-4">
				<Button onClick={() => setIsCreating(true)} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
					Create New Expense
				</Button>
			</div>
			<ExpensesTable expenses={expenses} handleEdit={setEditingExpense} handleDelete={handleDelete} />
			<p className="mt-8 md:text-xl text-md  font-semibold text-gray-400">
				<strong>Total Expenses:</strong> ${totalExpenses.toLocaleString()}
			</p>
			{editingExpense && <EditModal editingExpense={editingExpense} handleFieldChange={handleFieldChange} handleCancel={() => setEditingExpense(null)} />}
			{isCreating && <CreateModal newExpense={newExpense} handleFieldChange={handleFieldChange} handleCancel={() => setIsCreating(false)} handleCreate={handleCreate} />}
		</div>
	);
};

export default ExpensesList;
