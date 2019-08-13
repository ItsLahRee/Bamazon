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
      promptCustomer(res);
    })
  }

  var promptCustomer = function(res){
    inquirer.prompt([{
      type: 'input',
      name: 'choice',
      message:"What would you like to purchase?"
    }]).then(function(answer){
      var correct = false;
      for(var i=0;i<res.length;i++){
        if(res[i].product_name==answer.choice){
          correct = true;
          var product=answer.choice;
          var id=i;
          inquirer.prompt({
            type: "input",
            name: "quant",
            message: "How many would you like to buy?",
            validate: function(value){
              if(isNaN(value)==false){
              return true;
            } else {
              return false;
            }
          }
        }).then(function(answer){
          if((res[id].stock_quantity-answer.quant)>0){
            connection.query("UPDATE products SET stock_quantity='"
            +(res[id].stock_quantity-answer.quant)+"'WHERE product_name='"
            +product+"'", function(err,res2) {
                console.log("Product Bought!");
                makeTable();
              })
          } else {
            console.log("Not a valid selection!");
            promptCustomer(res);
          }
          })
        }
      }
    })
  }




//Prompt user with two questions: ask for the item ID, and the quantity to purchase

//Application will check to see if they have enough in stock

//Add Default message "Sorry, we are out of this product."

//If there is enough in stock fulfill the customers order

//Update your stock inventory



