
// Model require Database connection
var sql = require('./db.js');

// Define an Object constructor
var Genre = function(data) {
    this.id = data.id;
}

// Define Object method to be used by a Controller
Genre.getAllGenre= function (result) {

    // Database query
    sql.query('SELECT * from genres', function (err, res, fields) {
		if (err) throw err;
        result(null, res);
  });

};


// Export Object to Controller
module.exports = Genre;