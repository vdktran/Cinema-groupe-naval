
// Model require Database connection
var sql = require('./db.js');

// Define an Object constructor
var Dimension = function (data) {
  this.id = data.id,
    this.dimension_name = data.dimension_name,
    this.update = data.update,
    this.idUpdate = data.idUpdate,
    this.idDelete = data.idDelete
}

// Define Object method to be used by a Controller

Dimension.getAlldimensions = function (result) {

  // Database query
  sql.query('SELECT * from dimensions', function (err, res, fields) {
    if (err) throw err;
    result(null, res);
  });

};


// Define Object method to be used by a Controller
Dimension.insertAlldimensions = function (newdimensionInsert, result) {
  var newdimensionsInsert = Object.values(newdimensionInsert);
  console.log(newdimensionInsert);
  var tabledimensionInsert = [
    [newdimensionsInsert[1]]
  ];
  console.log(tabledimensionInsert);

  // Database query
  var query = 'INSERT INTO dimensions (dimension_name) VALUES ?'

  sql.query(query, [tabledimensionInsert], function (err, res, fields) {
    if (err) throw err;
    result(null, res);
  });
};

Dimension.updateAlldimensions = function (newdimensionUpdate, result) {
  var newdimensionsUpdate = Object.values(newdimensionUpdate);
  console.log(newdimensionsUpdate);
  var tabledimensionUpdate = [
    [newdimensionsUpdate[2], newdimensionsUpdate[3]]
  ];
  console.log(tabledimensionUpdate);

  // Database query
  var query = 'UPDATE dimensions SET ? WHERE id = ?'

  sql.query(query, [tabledimensionUpdate], function (err, res, fields) {
    if (err) throw err;
    result(null, res);
  });
};

Dimension.deleteAlldimensions = function (newdimensionDelete, result) {
  var newdimensionsDelete = Object.values(newdimensionDelete);
  console.log(newdimensionsDelete);
  var tabledimensionDelete = [
    [newdimensionsDelete[4]]
  ];
  console.log(tabledimensionDelete);

  // Database query
  var query = 'DELETE dimensions WHERE id = ?'

  sql.query(query, [tabledimensionDelete], function (err, res, fields) {
    if (err) throw err;
    result(null, res);
  });
};
// Export Object to Controller
module.exports = Dimension;
