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
   var table = [
     [ newcontacts[0], newcontacts[1] ,newcontacts[2] ]
    ];
   console.log(table);

    // Database query
    var query = 'INSERT INTO contacts (contact_pseudo,contact_objet,contact_message) VALUES ?'
    
  sql.query(query, [table],function (err, res, fields) {
      if (err) throw err;
        result(null, res);
  }); 
};
// Export Object to Controller
module.exports = Contacts;