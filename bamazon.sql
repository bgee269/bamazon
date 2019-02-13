DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  skateboards VARCHAR(30) NOT NULL,
  wheels VARCHAR(30) NOT NULL,
  grip VARCHAR(30) NOT NULL,
  trucks VARCHAR(30) NOT NULL,
  -- Make an numeric column called "score" --
score INTEGER(10)

INSERT INTO bid_items (item, price, quantity)
VALUES ("Skateboard", 20, 100), ("wheels", 10, 75), ("Griptape", 1.00, 1);

);