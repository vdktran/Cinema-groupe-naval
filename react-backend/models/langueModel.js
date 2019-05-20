
// Model require Database connection
var sql = require('./db.js');

// Define an Object constructor
var Langue = function(data) {
    this.id = data.id;
}

// Define Object method to be used by a Controller
Langue.getAllLangue= function (result) {

    // Database query
    sql.query('SELECT * from langues', function (err, res, fields) {
		if (err) throw err;
        result(null, res);
  });

};


// Export Object to Controller
module.exports = Langue;