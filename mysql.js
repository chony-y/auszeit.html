var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'cyoon0918',
  database : 'wunsch'
});
 

// mysql 연결
// com.microsoft.sqlserver.jdbc.SQLServerDriver;


connection.connect();

var sql = "SELECT * FROM wunsche";
var inserts = ['wish', 'name', 'date'];
sql = mysql.format(sql, inserts);

connection.query('SELECT * FROM wunsche', function(error, results, fields) {
  if (error) {
    console.log(error);
  }
  console.log(fields);
});
// con.connect(function(err) {
//   if (err) throw err;
//   con.query('SELECT * FROM wunsche', function (err, result, fields) {
//     if (err) throw err;
//     console.log(fields);
//   });
// });

connection.end();