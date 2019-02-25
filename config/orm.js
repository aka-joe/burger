// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
  all: function(table, cb) {
    var queryString = "SELECT * FROM " + table + ";";

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      };

      cb(result);
    });
  },
  create: function(table, cols, cb) {
    var queryString = "INSERT INTO " + table + " (" + cols.toString() + ") VALUES (?, 0)";

    console.log(queryString);
    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      };

      cb(result);
    });
  },
  update: function(table, condition, cb) {
    var queryString = "UPDATE " + table + " SET devoured = true WHERE " + condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      };

      cb(result);
    });
  },
  delete: function(table, condition, cb) {
    var queryString = "DELETE FROM " + table + " WHERE " + condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      };

      cb(result);
    });
  }
};

// Export the orm object for the model.
module.exports = orm;