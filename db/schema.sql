CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgerz (
  id INT(11) AUTO_INCREMENT NOT NULL,
  name VARCHAR(255) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);