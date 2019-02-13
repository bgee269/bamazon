var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Charmgizmo3!",
    database: "bamazon_DB"
});
function addSQL() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        var row1 = res[0];
        var row2 = res[1];
        var row3 = res[2];
        console.log(res);
    })
    connection.end();
}; addSQL();

var inquirer = require('inquirer');
inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "Welcome to Skate World! "
        },

        {
            type: "input",
            name: "name",
            message: "Hi there! what is the ID of the item you would like to buy?"
        },
        
        {
            type: "input",
            name: "name",
            message: "Great! How many units would you like?",
        },

        {
            type: "input",
            name: "name",
            message: "Awesome! We have that in stock!",
        }

    ])
    .then(function (user) {
        if (user.action) {
            console.log('which item? ' + user.action);
            
        }
        connection.connect(function (err) {
            if (err) throw err;
            // console.log("connected as id " + connection.threadId);
        });
        function addSQL() {
            connection.query("SELECT * FROM products", function (err, res) {
                if (err) throw err;
                var row1 = res[0];
                var row2 = res[1];
                var row3 = res[2];
                console.log(res);
                //console.log("=======Items======");
                //console.log (row1.id + row1.item + row1.price  + "\n"
                   // + row2.id + row2.item + row2.price  + "\n" 
                   // + row3.id + row3.item + row3.price   + "\n"
               // );
            })
            connection.end();
        }; addSQL();

       

    });