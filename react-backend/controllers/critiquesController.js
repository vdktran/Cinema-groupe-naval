
// Controller Require Model
var critique = require('../models/critiquesModel');

// Define and export a method to be used by the Route
exports.Display_all_critiques = function (req, res) {

    // Use a method defined in the Model
    critique.getAllcritiques(function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })
};

exports.Insert_all_critiques = function (req, res) {
    var new_critique_insert = new critique(req.body);

    // Use a method defined in the Model
    critique.insertAllcritiques(new_critique_insert, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
            console.log("controller json");
        }
    })

};

exports.Update_all_critiques = function (req, res) {
    var new_critique_update = new critique(req.body);

    // Use a method defined in the Model
    critique.updateAllcritiques(new_critique_update, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
            console.log("controller json");
        }
    })

};

exports.Delete_all_critiques = function (req, res) {
    var new_critique_Delete = new critique(req.body);

    // Use a method defined in the Model
    critique.deleteAllcritiques(new_critique_Delete, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
            console.log("controller json");
        }
    })

};


