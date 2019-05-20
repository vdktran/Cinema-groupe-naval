// Controller Require Model
var Contacts = require('../models/contactModel');


// Define and export a method to be used by the Route
exports.display_all_contacts = function (req, res) {
    var new_contact = new Contacts(req.body);

    // Use a method defined in the Model
    Contacts.postAllContacts(new_contact,function(err, data){
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })

  };