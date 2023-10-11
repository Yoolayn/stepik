INSERT INTO Departments (Department_ID, Department_name, Manager_ID, Location_ID) VALUES
	(60, "Informatyka", 201, 100),
	(62, "Matematyka", 351, 200),
	(63, "Ekonomia", 451, 300);

INSERT INTO Employees (Employee_ID, Firstname, Lastname, Job_ID, Salary, Manager_ID, Department_ID) VALUES
	(510, "Mateusz", "Miotk", "UG", 1000.00, 201, 60),
	(511, "Jan", "Kowalski", "PG", 1500.50, 351, 62),
	(512, "Anna", "Nowak", "WSB", 1234.00, 451, 63);
