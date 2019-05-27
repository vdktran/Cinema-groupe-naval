
// Controller Require Model
var Salle = require('../models/sallesModel');

// Define and export a method to be used by the Route
exports.Display_all_salles = function (req, res) {

    // Use a method defined in the Model
    Salle.getAllsalle(function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })
};

exports.Insert_all_salles = function (req, res) {
    var new_salle_insert = new salle(req.body);

    // Use a method defined in the Model
    Salle.insertAllsalles(new_salle_insert, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
            console.log("controller json");
        }
    })

};

exports.Update_all_salles = function (req, res) {
    var new_salle_update = new salle(req.body);

    // Use a method defined in the Model
    Salle.updateAllsalles(new_salle_update, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
            console.log("controller json");
        }
    })

};

exports.Delete_all_salles = function (req, res) {
    var new_salle_Delete = new salle(req.body);

    // Use a method defined in the Model
    Salle.deleteAllsalles(new_salle_Delete, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
            console.log("controller json");
        }
    })

};


