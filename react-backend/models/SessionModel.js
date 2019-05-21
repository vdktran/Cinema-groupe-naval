
// Model require Database connection
var sql = require('./db.js');

// Define an Object constructor
var Session = function(data) {
    this.id = data.id;
}

// Define Object method to be used by a Controller
Session.getAllSession= function (result) {

    // Database query
    sql.query('SELECT * from seances INNER JOIN films ON seances.film_id = films.film_id', function (err, res, fields) {
		if (err) throw err;
        result(null, res);
  });

};


// Export Object to Controller
module.exports = Session;