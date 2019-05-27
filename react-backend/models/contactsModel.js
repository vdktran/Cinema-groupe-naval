
// Model require Database connection
var sql = require('./db.js');

// Define an Object constructor
var Contact = function (data) {
  this.id = data.id,
    this.contact_pseudo = data.contact_pseudo,
    this.contact_objet = data.contact_objet,
    this.contact_message = data.contact_message,
    this.update = data.update,
    this.idUpdate = data.idUpdate,
    this.idDelete = data.idDelete
}

// Define Object method to be used by a Controller

Contact.getAllcontacts = function (result) {

  // Database query
  sql.query('SELECT * from contacts', function (err, res, fields) {
    if (err) throw err;
    result(null, res);
  });

};


// Define Object method to be used by a Controller
Contact.insertAllcontacts = function (newcontactInsert, result) {
  var newcontactsInsert = Object.values(newcontactInsert);
  console.log(newcontactInsert);
  var tablecontactInsert = [
    [newcontactsInsert[1], newcontactsInsert[2], newcontactsInsert[3]]
  ];
  console.log(tablecontactInsert);

  // Database query
  var query = 'INSERT INTO contacts (contact_pseudo, contact_objet, contact_message) VALUES ?'

  sql.query(query, [tablecontactInsert], function (err, res, fields) {
    if (err) throw err;
    result(null, res);
  });
};

Contact.updateAllcontacts = function (newcontactUpdate, result) {
  var newcontactsUpdate = Object.values(newcontactUpdate);
  console.log(newcontactsUpdate);
  var tablecontactUpdate = [
    [newcontactsUpdate[4], newcontactsUpdate[5]]
  ];
  console.log(tablecontactUpdate);

  // Database query
  var query = 'UPDATE contacts SET ? WHERE id = ?'

  sql.query(query, [tablecontactUpdate], function (err, res, fields) {
    if (err) throw err;
    result(null, res);
  });
};

Contact.deleteAllcontacts = function (newcontactDelete, result) {
  var newcontactsDelete = Object.values(newcontactDelete);
  console.log(newcontactsDelete);
  var tablecontactDelete = [
    [newcontactsDelete[6]]
  ];
  console.log(tablecontactDelete);

  // Database query
  var query = 'DELETE contacts WHERE id = ?'

  sql.query(query, [tablecontactDelete], function (err, res, fields) {
    if (err) throw err;
    result(null, res);
  });
};
// Export Object to Controller
module.exports = Contact;
