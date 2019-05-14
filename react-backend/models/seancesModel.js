
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

Seances.getSeancesOfTheDay = function (result) {

  var date = new Date();
  var dayinteger = date.getDay();
  function day() {
  switch(dayinteger) {
    case 1 :
    var day ='Lundi';
    break;

    case 2 :
    var day ='Mardi';
    break;

    case 3 :
    var day ='Mercredi';
    break;

    case 4 :
    var day ='Jeudi';
    break;

    case 5 :
    var day ='Vendredi';
    break;

    case 6 :
    var day ='Samedi';
    break;

    case 0 :
    var day ='Dimanche';
    break;

  }

  return day;
}
  
  var queryOfTeDay =day();

  // Database query
  sql.query('SELECT * from films INNER JOIN seances ON films.film_id = seances.film_id WHERE seances.dayweek=?',[queryOfTeDay], function (err, res, fields) {
  if (err) throw err;
      result(null, res);
});

};


// Export Object to Controller
module.exports = Seances;