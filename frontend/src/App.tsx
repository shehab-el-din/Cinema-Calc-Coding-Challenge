import React from "react";
import ExpensesList from "./pages/expenses-list";

const App: React.FC = () => {
	return (
		<div className="bg-[#2d2d2d] min-h-screen flex flex-col justify-center items-center">
			<header className="App-header text-center py-4 ">
				<h1 className="text-4xl font-bold text-gray-400">Expense Tracker</h1>
			</header>
			<main className="container mx-auto my-8 text-white text-black">
				<ExpensesList />
			</main>
		</div>
	);
};

export default App;
