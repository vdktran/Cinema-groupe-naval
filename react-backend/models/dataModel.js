
// Model require Database connection
var sql = require('./db.js');

// Define an Object constructor
var Data = function(data) {
    this.id = data.id;
}

// Define Object method to be used by a Controller
Data.getAllData = function (result) {

    // Database query
    sql.query('SELECT * from films', function (err, res, fields) {
		if (err) throw err;
        result(null, res);
  });

};

// Export Object
module.exports = Data;