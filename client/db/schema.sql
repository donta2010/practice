DROP DATASE IF EXISTS Recommend;
CREATE DATABASE Recommend;
USE Recommend;

CREATE TABLE Recommendation
(
	id int NOT NULL AUTO_INCREMENT,
	email varchar(255) NOT NULL,
	recommendation varchar(255) NOT NULL,
	PRIMARY KEY (id)
);