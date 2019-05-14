
// Model require Database connection
var sql = require('./db.js');

// Define an Object constructor
var Contacts = function(data) {
    this.id = data.id;
}

// Define Object method to be used by a Controller
Contacts.postAllContacts = function (result) {

    // Database query
    sql.query('INSERT INTO contacts', function (err, res, fields) {
		if (err) throw err;
        result(null, res);
  });

};


// Export Object to Controller
module.exports = Contacts;