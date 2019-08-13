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
database: "bamazon_DB",

})

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  console.log("connection successful!");
 makeTable();
});
  //display list of 10 items for sale (item_id, dept_name, price)
  var makeTable = function() {
    connection.query("SELECT * FROM products", function(err,res) {
      for(var i=0; i<res.length; i++){
        console.log(res[i]. item_id+ " || "+ res[i].product_name+" || "+
        res[i].department_name+ " || "+res[i].price+" || "+res[i].
        stock_quantity+"\n");

      }
    })
  }




//Prompt user with two questions: ask for the item ID, and the quantity to purchase

//Application will check to see if they have enough in stock

//Add Default message "Sorry, we are out of this product."

//If there is enough in stock fulfill the customers order

//Update your stock inventory



