var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-03.cleardb.net",
  port: 3306,
  user: "bb4d0593952e8a",
  password: "2ff14e89",
  database: "heroku_6ff6510671fcb48"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;