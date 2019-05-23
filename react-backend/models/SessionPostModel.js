// Model require Database connection
var sql = require('./db.js');


// Define an Object constructor
var SessionPost = function(data) {
     this.dayweek = data.dayweek;
     this.film_id = data.film;
     this.date_du_jour = data.startdate;
     this.dimension_id = data.dimension;
     this.langue_id = data.langue;
     this.salle_id = data.salle;
}
console.log(SessionPost);
// Define Object method to be used by a Controller
SessionPost.postAllSessions = function (newsessionpost, result) {
   var newsessionspost= Object.values(newsessionpost);
   console.log(newsessionspost[4]);
   var tablesessionpost = [
     [newsessionspost[0], newsessionspost[1], newsessionspost[2],newsessionspost[3], newsessionspost[4], newsessionspost[5]]
    ];
   console.log(tablesessionpost);

    // Database query
    var query = 'INSERT INTO seances (dayweek, film_id, date_du_jour, dimension_id, langue_id, salle_id) VALUES ?' 
    
  sql.query(query, [tablesessionpost],function (err, res, fields) {
      if (err) throw err;
        result(null, res);
  }); 
};
// Export Object to Controller
module.exports = SessionPost;