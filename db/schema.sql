DROP DATABASE IF EXISTS eat-da-burger_db;

CREATE DATABASE eat-da-burger_db;

USE DATABASE eat-da-burger_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

SELECT * 
FROM burgers;