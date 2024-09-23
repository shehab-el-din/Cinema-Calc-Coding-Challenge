import React from "react";
//import { useExpensesStore } from "../useExpensesStore";
import { ExpensesCreateDTO } from "../helpers/models";
import Button from "./button";

interface IProps {
	newExpense: ExpensesCreateDTO;
	handleFieldChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleCancel: () => void;
	handleCreate: () => void;
}

const CreateModal: React.FC<IProps> = ({ newExpense, handleFieldChange, handleCancel, handleCreate }) => {
	return (
		<div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
			<div className="bg-gray-900 p-6 rounded shadow-lg max-w-md w-full relative">
				<h2 className="text-2xl font-bold mb-4 text-white">Create New Expense</h2>
				<label className="block mb-2 text-white">
					Name:
					<input type="text" name="name" value={newExpense.name} onChange={handleFieldChange} className="w-full p-2 border rounded bg-gray-700 text-white placeholder-gray-500" placeholder="Actor" />
				</label>
				<label className="block mb-2 text-white">
					Price:
					<input type="number" name="price" value={newExpense.price ?? ""} onChange={handleFieldChange} className="w-full p-2 border rounded bg-gray-700 text-white placeholder-gray-500" placeholder="0" />
				</label>
				<label className="block mb-2 text-white">
					Percentage Markup:
					<input type="number" name="percentage_Markup" value={newExpense.percentage_Markup ?? ""} onChange={handleFieldChange} className="w-full p-2 border rounded bg-gray-700 text-white placeholder-gray-500" placeholder="0" />
				</label>
				<div className="flex justify-end mt-4">
					<Button onClick={handleCancel} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 mr-2">
						Cancel
					</Button>
					<Button onClick={handleCreate} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
						Create
					</Button>
				</div>
			</div>
		</div>
	);
};

export default CreateModal;
