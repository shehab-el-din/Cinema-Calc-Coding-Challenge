import React from "react";
import { useExpensesStore } from "../context/useExpensesStore";
import { ExpenseDTO } from "../helpers/models";
import Button from "./button";

interface IProps {
	editingExpense: ExpenseDTO;
	handleFieldChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleCancel: () => void;
}
const EditModal: React.FC<IProps> = ({ editingExpense, handleFieldChange, handleCancel }) => {
	const handleSave = () => {
		useExpensesStore.getState().updateExpense(editingExpense);
		handleCancel();
	};

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
			<div className="bg-gray-900 p-6 rounded shadow-lg max-w-md w-full relative">
				<h2 className="text-2xl font-bold mb-4 text-white">Edit Expense</h2>
				<label className="block mb-2 text-white">
					Name:
					<input type="text" name="name" value={editingExpense.name} onChange={handleFieldChange} className="w-full p-2 border rounded bg-gray-700 text-white" />
				</label>
				<label className="block mb-2 text-white">
					Price:
					<input type="number" name="price" value={editingExpense.price} onChange={handleFieldChange} className="w-full p-2 border rounded bg-gray-700 text-white" />
				</label>
				<label className="block mb-2 text-white">
					Percentage Markup:
					<input type="number" name="percentage_Markup" value={editingExpense.percentage_Markup} onChange={handleFieldChange} className="w-full p-2 border rounded bg-gray-700 text-white" />
				</label>
				<div className="flex justify-end mt-4">
					<Button onClick={handleCancel} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 mr-2">
						Cancel
					</Button>
					<Button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
						Save
					</Button>
				</div>
			</div>
		</div>
	);
};

export default EditModal;
