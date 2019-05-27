
// Model require Database connection
var sql = require('./db.js');

// Define an Object constructor
var Statu = function (data) {
  this.id = data.id,
    this.statut_name = data.statut_name,
    this.update = data.update,
    this.idUpdate = data.idUpdate,
    this.idDelete = data.idDelete
}

// Define Object method to be used by a Controller

Statu.getAllstatus = function (result) {

  // Database query
  sql.query('SELECT * from statuts', function (err, res, fields) {
    if (err) throw err;
    result(null, res);
  });

};


// Define Object method to be used by a Controller
Statu.insertAllstatus = function (newstatuInsert, result) {
  var newstatusInsert = Object.values(newstatuInsert);
  console.log(newstatuInsert);
  var tablestatuInsert = [
    [newstatusInsert[1], newstatusInsert[2], newstatusInsert[3], newstatusInsert[4], newstatusInsert[5], newstatusInsert[6], newstatusInsert[7]]
  ];
  console.log(tablestatuInsert);

  // Database query
  var query = 'INSERT INTO statuts (statut_name) VALUES ?'

  sql.query(query, [tablestatuInsert], function (err, res, fields) {
    if (err) throw err;
    result(null, res);
  });
};

Statu.updateAllstatus = function (newstatuUpdate, result) {
  var newstatusUpdate = Object.values(newstatuUpdate);
  console.log(newstatusUpdate);
  var tablestatuUpdate = [
    [newstatusUpdate[8], newstatusUpdate[9]]
  ];
  console.log(tablestatuUpdate);

  // Database query
  var query = 'UPDATE statuts SET ? WHERE id = ?'

  sql.query(query, [tablestatuUpdate], function (err, res, fields) {
    if (err) throw err;
    result(null, res);
  });
};

Statu.deleteAllstatus = function (newstatuDelete, result) {
  var newstatusDelete = Object.values(newstatuDelete);
  console.log(newstatusDelete);
  var tablestatuDelete = [
    [newstatusDelete[10]]
  ];
  console.log(tablestatuDelete);

  // Database query
  var query = 'DELETE statuts WHERE id = ?'

  sql.query(query, [tablestatuDelete], function (err, res, fields) {
    if (err) throw err;
    result(null, res);
  });
};
// Export Object to Controller
module.exports = Statu;
