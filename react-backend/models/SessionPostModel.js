// Model require Database connection
var sql = require('./db.js');


// Define an Object constructor
var Session = function(data) {
    this.dayweek = data.dayweek;
    this.film_id = data.film;
    this.date = data.startdate;
    this.dimension = data.dimension;
    this.langue = data.langue;
}

// Define Object method to be used by a Controller
Session.postAllSessions = function (newsession, result) {
   var newsessions= Object.values(newsession);
   var table = [
     [ newsessions[0]/* , newsessions[1] ,newsessions[2], newsessions[3], newsessions[4] */ ]
    ];
   console.log(table);

    // Database query
    var query = 'INSERT INTO seances (dayweek) VALUES ?'
    
  sql.query(query, [table],function (err, res, fields) {
      if (err) throw err;
        result(null, res);
  }); 
};
// Export Object to Controller
module.exports = Session;