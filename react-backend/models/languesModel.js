
// Model require Database connection
var sql = require('./db.js');

// Define an Object constructor
var Langue = function (data) {
  this.id = data.id,
    this.dayweek = data.dayweek,
    this.langues_name = data.langues_name,
    this.update = data.update,
    this.idUpdate = data.idUpdate,
    this.idDelete = data.idDelete
}

// Define Object method to be used by a Controller

Langue.getAlllangues = function (result) {

  // Database query
  sql.query('SELECT * from langues', function (err, res, fields) {
    if (err) throw err;
    result(null, res);
  });

};


// Define Object method to be used by a Controller
Langue.insertAlllangues = function (newlangueInsert, result) {
  var newlanguesInsert = Object.values(newlangueInsert);
  console.log(newlangueInsert);
  var tablelangueInsert = [
    [newlanguesInsert[1]]
  ];
  console.log(tablelangueInsert);

  // Database query
  var query = 'INSERT INTO langues (langues_name) VALUES ?'

  sql.query(query, [tablelangueInsert], function (err, res, fields) {
    if (err) throw err;
    result(null, res);
  });
};

Langue.updateAlllangues = function (newlangueUpdate, result) {
  var newlanguesUpdate = Object.values(newlangueUpdate);
  console.log(newlanguesUpdate);
  var tablelangueUpdate = [
    [newlanguesUpdate[8], newlanguesUpdate[9]]
  ];
  console.log(tablelangueUpdate);

  // Database query
  var query = 'UPDATE seances SET ? WHERE id = ?'

  sql.query(query, [tablelangueUpdate], function (err, res, fields) {
    if (err) throw err;
    result(null, res);
  });
};

Langue.deleteAlllangues = function (newlangueDelete, result) {
  var newlanguesDelete = Object.values(newlangueDelete);
  console.log(newlanguesDelete);
  var tablelangueDelete = [
    [newlanguesDelete[10]]
  ];
  console.log(tablelangueDelete);

  // Database query
  var query = 'DELETE seances WHERE id = ?'

  sql.query(query, [tablelangueDelete], function (err, res, fields) {
    if (err) throw err;
    result(null, res);
  });
};
// Export Object to Controller
module.exports = Langue;
