//create variables
var mysql = require("mysql");
var inquirer = require("inquirer");

//create connection info for SQL database
var connection = mysql.createConnection({
  host: "localhost",

//Your port
port: 3306,

//username
user: "root",

//password
password: "Happy_Pug19",
//database
database: "Bamazon_DB",

});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

//display list of 10 items for sale (id, name, price)

//Prompt user with two questions: ask for the item ID, and the quantity to purchase

//Application will check to see if they have enough in stock

//Add Default message "Sorry, we are out of this product."

//If there is enough in stock fulfill the customers order

//Update your stock inventory
