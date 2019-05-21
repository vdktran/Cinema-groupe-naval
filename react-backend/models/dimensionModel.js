
// Model require Database connection
var sql = require('./db.js');

// Define an Object constructor
var Dimension = function(data) {
    this.id = data.id;
}

// Define Object method to be used by a Controller
Dimension.getAllDimension = function (result) {

    // Database query
    sql.query('SELECT * from dimensions', function (err, res, fields) {
		if (err) throw err;
        result(null, res);
  });

};


// Export Object to Controller
module.exports = Dimension;