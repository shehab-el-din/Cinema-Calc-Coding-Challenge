
					Cinema Calc Coding Challenge

1. How to run the project locally

	Clone the Repository


		git clone <git-url>
		cd Cinema-Calc-Coding-Challenge


	Set up the Backend

	1. Navigate to the backend directory:

		cd Cinema-Calc

	2. Restore dependencies:

   		dotnet restore

	3. Ensure PostgreSQL is installed and running.
	4. Adjust the connection string in `appsettings.json` to match your PostgreSQL setup.
	5. Run the migrations:

  		dotnet ef migrations add InitialCreate
   		dotnet ef database update

	6. Start the backend:

   		dotnet run


	Set up the Frontend

	1. Navigate to the frontend directory:
	
   		cd ../frontend
	
	2. Install dependencies:
 	
   		npm install
   
	3. Install TailwindCSS and related dependencies:
	
  		npm install -D tailwindcss postcss autoprefixer
	
	4. Initialize TailwindCSS configuration:
	
   		npx tailwindcss init -p
		
	5. Start the frontend:
	
   		npm run dev
	

	Access the Application

		- Backend: http://localhost:5044/swagger/index.html
		- Frontend: http://localhost:5173/

                   _______________________________________________________________


2. What is the overall structure of the code?

	Frontend

		- Built with React, TypeScript, and TailwindCSS.
		- Uses Vite for bundling and development.
		- Zustand is used for state management.
		- Main directories:
  			- `src/components`: Contains reusable React components.
  			- `src/pages`: Contains the pages of the application.
  			- `src/context`: Contains the Zustand store for state management.

	Backend

		- Built with .NET and C#.
		- Uses Entity Framework Core for database interactions.
		- PostgreSQL is used for the database.
		- Main directories:
			- `Controllers`: Contains API controllers.
			- `Data`: Contains the database context and migrations.
			- `Models`: Contains data models.
			- `Repositories`: Contains repository classes for data access.

                   _______________________________________________________________


3. How do you manage state in your application? Why did you choose this solution?

	Frontend

	- State management is handled by Zustand, a small, fast, and scalable state management 	library.
	- Zustand was chosen for its simplicity, ease of use, and minimal boilerplate, which integrates well with the React ecosystem.

	Backend

	- The backend state is managed using Entity Framework Core, which provides a robust ORM for managing the database state.
	- This solution was chosen for its seamless integration with .NET and its powerful features for database management.


                   _______________________________________________________________


4. How does your approach for precise number calculations work?

	- Backend: I used C#'s decimal type to ensure precision in financial calculations.
	- Frontend: I used JavaScript's Number object and the `toFixed` method for precise number calculations.

                   _______________________________________________________________


5. What tasks did you have on your mind? How did you break down the deliverables?

	1. Examine the Requirements

		- Review the project requirements to understand the scope and objectives.

	2. Backend Development

		1. Define Models and DTOs: 
			- Define necessary models and Data Transfer Objects (DTOs).
		2. Set up the Database: 
			- Set up the database schema based on the models.
		3. Create Repository and Interfaces: 
			- Implement repository classes and interfaces for data access.
		4. Construct API Controllers: 
			- Implement controllers to handle HTTP requests and interact with repositories.
		5. Test the Backend: 
			- Ensure that all endpoints and functionalities work as expected.

	3. Frontend Development

		1. Design the UI: 
   			- Create an initial design, focusing on user experience and usability.
		2. Component Breakdown: 
			- Break down the UI into reusable React components.
		3. Implement Components: 
   			- Develop the React components.
		4. Set up State Management: 
   			- Configure Zustand for handling the application's state.
		5. Integration Testing: 
   			- Test the interaction between the frontend and backend to ensure smooth data flow.

