
// Model require Database connection
var sql = require('./db.js');


// Define an Object constructor
var Contacts = function(data) {
    this.pseudo = data.pseudo;
    this.object = data.object;
    this.message = data.message;
}

// Define Object method to be used by a Controller
Contacts.postAllContacts = function (newcontact, result) {
   var newcontacts= Object.values(newcontact);

   console.log(newcontacts);
    // Database query
    sql.query('INSERT INTO contacts (pseudo,object,message) VALUES ?',newcontacts,function (err, res, fields) {
		if (err) throw err;
        result(null, res);
  });

};


// Export Object to Controller
module.exports = Contacts;