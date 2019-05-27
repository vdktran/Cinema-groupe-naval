
// Model require Database connection
var sql = require('./db.js');

// Define an Object constructor
var pri = function (data) {
  this.id = data.id,
    this.nom_du_tarif = data.nom_du_tarif,
    this.seances_id = data.tarif,
    this.update = data.update,
    this.idUpdate = data.idUpdate,
    this.idDelete = data.idDelete
}

// Define Object method to be used by a Controller

pri.getAllpri = function (result) {

  // Database query
  sql.query('SELECT * FROM prix', function (err, res, fields) {
    if (err) throw err;
    result(null, res);
  });

};


// Define Object method to be used by a Controller
pri.insertAllpri = function (newpriInsert, result) {
  var newprisInsert = Object.values(newpriInsert);
  console.log(newpriInsert);
  var tablepriInsert = [
    [newprisInsert[1], newprisInsert[2]]
  ];
  console.log(tablepriInsert);

  // Database query
  var query = 'INSERT INTO prix (nom_du_tarif, tarif) VALUES ?'

  sql.query(query, [tablepripost], function (err, res, fields) {
    if (err) throw err;
    result(null, res);
  });
};

pri.updateAllpri = function (newpriUpdate, result) {
  var newprisUpdate = Object.values(newpriUpdate);
  console.log(newprisUpdate);
  var tablepriUpdate = [
    [newprisUpdate[8], newprisUpdate[9]]
  ];
  console.log(tablepriUpdate);

  // Database query
  var query = 'UPDATE prix SET ? WHERE id = ?'

  sql.query(query, [tablepriUpdate], function (err, res, fields) {
    if (err) throw err;
    result(null, res);
  });
};

pri.deleteAllpri = function (newpriDelete, result) {
  var newprisDelete = Object.values(newpriDelete);
  console.log(newprisDelete);
  var tablepriDelete = [
    [newprisDelete[10]]
  ];
  console.log(tablepriDelete);

  // Database query
  var query = 'DELETE pris WHERE id = ? '

  sql.query(query, [tablepriDelete], function (err, res, fields) {
    if (err) throw err;
    result(null, res);
  });
};
// Export Object to Controller
module.exports = pri;
