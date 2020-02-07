DROP DATABASE IF EXISTS eat_da_burger_db;

CREATE DATABASE eat_da_burger_db;

USE eat_da_burger_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

SELECT * 
FROM burgers;