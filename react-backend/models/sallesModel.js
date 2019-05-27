
// Model require Database connection
var sql = require('./db.js');

// Define an Object constructor
var salle = function (data) {
  this.id = data.id,
    this.salle_name = data.salle_name,
    this.capacite = data.capacite,
    this.update = data.update,
    this.idUpdate = data.idUpdate,
    this.idDelete = data.idDelete
}

// Define Object method to be used by a Controller

salle.getAllsalle = function (result) {

  // Database query
  sql.query('SELECT * from salles', function (err, res, fields) {
    if (err) throw err;
    result(null, res);
  });

};


// Define Object method to be used by a Controller
salle.insertAllsalle = function (newsalleInsert, result) {
  var newsallesInsert = Object.values(newsalleInsert);
  console.log(newsalleInsert);
  var tablesallepost = [
    [newsallespost[1], newsallespost[2]]
  ];
  console.log(tablesallepost);

  // Database query
  var query = 'INSERT INTO salles (salle_name, capacite) VALUES ?'

  sql.query(query, [tablesallepost], function (err, res, fields) {
    if (err) throw err;
    result(null, res);
  });
};

salle.updateAllsalle = function (newsalleUpdate, result) {
  var newsallesUpdate = Object.values(newsalleUpdate);
  console.log(newsallesUpdate);
  var tablesalleUpdate = [
    [newsallesUpdate[3], newsallesUpdate[4]]
  ];
  console.log(tablesalleUpdate);

  // Database query
  var query = 'UPDATE salles SET ? WHERE id = ?'

  sql.query(query, [tablesalleUpdate], function (err, res, fields) {
    if (err) throw err;
    result(null, res);
  });
};

salle.deleteAllsalle = function (newsalleDelete, result) {
  var newsallesDelete = Object.values(newsalleDelete);
  console.log(newsallesDelete);
  var tablesalleDelete = [
    [newsallesDelete[5]]
  ];
  console.log(tablesalleDelete);

  // Database query
  var query = 'DELETE salles WHERE id = ?'

  sql.query(query, [tablesalleDelete], function (err, res, fields) {
    if (err) throw err;
    result(null, res);
  });
};
// Export Object to Controller
module.exports = salle;
