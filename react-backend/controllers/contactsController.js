
// Controller Require Model
var contact = require('../models/contactsModel');

// Define and export a method to be used by the Route
exports.Display_all_contacts = function (req, res) {

    // Use a method defined in the Model
    contact.getAllcontacts(function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })
};

exports.Insert_all_contacts = function (req, res) {
    var new_contact_insert = new contact(req.body);

    // Use a method defined in the Model
    contact.insertAllcontacts(new_contact_insert, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
            console.log("controller json");
        }
    })

};

exports.Update_all_contacts = function (req, res) {
    var new_contact_update = new contact(req.body);

    // Use a method defined in the Model
    contact.updateAllcontacts(new_contact_update, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
            console.log("controller json");
        }
    })

};

exports.Delete_all_contacts = function (req, res) {
    var new_contact_Delete = new contact(req.body);

    // Use a method defined in the Model
    contact.deleteAllcontacts(new_contact_Delete, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
            console.log("controller json");
        }
    })

};


