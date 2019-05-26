
// Model require Database connection
var sql = require('./db.js');

// Define an Object constructor
var Seances = function(data) {
    this.id = data.id;
}

// Define Object method to be used by a Controller
Seances.getAllSeances = function (result) {

    // Database query
    sql.query('SELECT * from films NATURAL JOIN seances', function (err, res, fields) {
		if (err) throw err;
        result(null, res);
  });

};

Seances.getSeancesOfTheDay = function (request, result) {

  // var queryOfTeDay =day();
  console.log("request : "+request);
  var queryOfTeDay = request;
  console.log('lundi : '+request[0]);
  // Database query
  sql.query('SELECT * from films INNER JOIN seances ON films.film_id = seances.film_id WHERE seances.dayweek=? && seances.film_id=?',queryOfTeDay, function (err, res, fields) {
  if (err) throw err;

      result(null, res);
      console.log(res);
});

};


// Export Object to Controller
module.exports = Seances;