DROP DATABASE IF EXISTS roster_db;

CREATE DATABASE roster_db;
USE roster_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30)
) ENGINE INNODB;

CREATE TABLE employeerole (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR (30),
    salary DECIMAL,
    departments_id INT,
    FOREIGN KEY (departments_id)
    REFERENCES department(id)
    ON DELETE SET NULL
) ENGINE INNODB;

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR (30),
    lastname VARCHAR (30),
    role_id INT,
    FOREIGN KEY (role_id)
    REFERENCES employeerole(id)
    ON DELETE SET NULL
) ENGINE INNODB;