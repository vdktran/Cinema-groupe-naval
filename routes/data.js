var express = require('express');
var router = express.Router();


var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  port: 3306,
  password : '',
  database: "navaldb"
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});



/* GET users listing. */
router.get('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');
  connection.query('SELECT * from film', function (error, results, fields) {
    console.log(results);
		if (error) throw error;
    res.json(results);
    
  });
  // And insert something like this instead:

});


module.exports = router;
