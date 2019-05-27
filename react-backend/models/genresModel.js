
// Model require Database connection
var sql = require('./db.js');

// Define an Object constructor
var Genre = function (data) {
  this.id = data.id,
    this.genre_name = data.genre_name,
    this.update = data.update,
    this.idUpdate = data.idUpdate,
    this.idDelete = data.idDelete
}

// Define Object method to be used by a Controller

Genre.getAllgenres = function (result) {

  // Database query
  sql.query('SELECT * from genres', function (err, res, fields) {
    if (err) throw err;
    result(null, res);
  });

};


// Define Object method to be used by a Controller
Genre.insertAllgenres = function (newgenreInsert, result) {
  var newgenresInsert = Object.values(newgenreInsert);
  console.log(newgenreInsert);
  var tablegenreInsert = [
    [newgenresInsert[1]]
  ];
  console.log(tablegenreInsert);

  // Database query
  var query = 'INSERT INTO genres (genre_name) VALUES ?'

  sql.query(query, [tablegenreInsert], function (err, res, fields) {
    if (err) throw err;
    result(null, res);
  });
};

Genre.updateAllgenres = function (newgenreUpdate, result) {
  var newgenresUpdate = Object.values(newgenreUpdate);
  console.log(newgenresUpdate);
  var tablegenreUpdate = [
    [newgenresUpdate[2], newgenresUpdate[3]]
  ];
  console.log(tablegenreUpdate);

  // Database query
  var query = 'UPDATE genres SET ? WHERE id = ?'

  sql.query(query, [tablegenreUpdate], function (err, res, fields) {
    if (err) throw err;
    result(null, res);
  });
};

Genre.deleteAllgenres = function (newgenreDelete, result) {
  var newgenresDelete = Object.values(newgenreDelete);
  console.log(newgenresDelete);
  var tablegenreDelete = [
    [newgenresDelete[4]]
  ];
  console.log(tablegenreDelete);

  // Database query
  var query = 'DELETE genres WHERE id = ?'

  sql.query(query, [tablegenreDelete], function (err, res, fields) {
    if (err) throw err;
    result(null, res);
  });
};
// Export Object to Controller
module.exports = Genre;
