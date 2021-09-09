var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'blabla',
  database : 'my_db'
});
 
connection.connect();
 