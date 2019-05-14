
// Controller Require Model
var Contacts = require('../models/ContactModel');

// Define and export a method to be used by the Route
exports.display_all_contacts = function (req, res) {

    // Use a method defined in the Model
    Contacts.postAllContacts(function(err, data){
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })

  };
