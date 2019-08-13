CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price decimal	(10,4) NOT NULL,
  stock_quantity integer (10) NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("toothbrush", "Bath", 7.99, 200),
("shampoo", "Bath", 12.99, 400),
("conditioner", "Bath", 11.99, 300),
("hairbrush", "Bath", 5.99, 600),
("toothpaste", "Bath", 3.99, 400),
("hairspray", "Bath", 14.99, 500),
("eyedrops", "Bath", 4.99, 700),
("bodywash", "Bath", 10.99, 800),
("toiletpaper", "Bath", 16.99, 800),
("deoderant", "Bath", 6.99, 300);

SELECT * FROM bamazon.produdts;
