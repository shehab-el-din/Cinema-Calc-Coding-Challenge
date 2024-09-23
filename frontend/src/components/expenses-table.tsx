import React from "react";
import { ExpenseDTO } from "../helpers/models";
//import { useExpensesStore } from "../useExpensesStore";
import Button from "./button";
import { FaRegTrashAlt } from "react-icons/fa";

interface IProps {
	expenses: ExpenseDTO[];
	handleEdit: (expense: ExpenseDTO) => void;
	handleDelete: (id: number) => void;
}

const ExpensesTable: React.FC<IProps> = ({ expenses, handleEdit, handleDelete }) => {
	return (
		<div className="w-full overflow-auto rounded-2xl shadow-2xl">
			<table className="min-w-full text-gray-400 text-center md:h-full h-1/2">
				<thead>
					<tr className="md:text-sm text-xs">
						<th className="md:p-2 p-1 border-r-[1px] border-b-[1px]">Name</th>
						<th className="md:p-2 p-1 border-r-[1px] border-b-[1px]">Price</th>
						<th className="md:p-2 p-1 border-r-[1px] border-b-[1px]">Percentage Markup</th>
						<th className="md:p-2 p-1 border-r-[1px] border-b-[1px]">Final Price</th>
						<th className="md:p-2 p-1 border-b border-gray-200">Action</th>
					</tr>
				</thead>
				<tbody>
					{expenses.map((expense) => (
						<tr
							key={expense.id}
							onClick={() => {
								handleEdit(expense);
							}}
							className="hover:cursor-pointer border-gray-200 border-b-[1px] last:border-b-0 md:text-sm text-xs"
						>
							<td className="md:p-2 p-1 border-r-[1px]">{expense.name}</td>
							<td className="md:p-2 p-1 border-r-[1px]">$ {expense.price.toLocaleString()}</td>
							<td className="md:p-2 p-1 border-r-[1px]">{expense.percentage_Markup} %</td>
							<td className="md:p-2 p-1 border-r-[1px]">$ {expense.final_Price.toLocaleString()}</td>
							<td className="md:p-2 p-1">
								<Button
									onClick={() => {
										handleDelete(expense.id);
									}}
									className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
								>
									<FaRegTrashAlt />
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ExpensesTable;
