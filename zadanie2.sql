CREATE TABLE Person (
    Person_id int PRIMARY KEY AUTO_INCREMENT,
    Person_firstname varchar(255) NOT NULL,
    Person_secondname varchar(255) NOT NULL
);

CREATE TABLE Cars (
    Cars_id int PRIMARY KEY AUTO_INCREMENT,
	Cars_model varchar(255) NOT NULL,
	Cars_price float NOT NULL,
	Cars_day_of_buy datetime NOT NULL,
	Person_id int NOT NULL,
	FOREIGN KEY (Person_ID) REFERENCES Person(Person_id)
);
