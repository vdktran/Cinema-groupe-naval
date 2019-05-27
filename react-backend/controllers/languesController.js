
// Controller Require Model
var langue = require('../models/languesModel');

// Define and export a method to be used by the Route
exports.Display_all_langues = function (req, res) {

    // Use a method defined in the Model
    langue.getAlllangues(function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })
};

exports.Insert_all_langues = function (req, res) {
    var new_langue_insert = new langue(req.body);

    // Use a method defined in the Model
    langue.insertAlllangues(new_langue_insert, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
            console.log("controller json");
        }
    })

};

exports.Update_all_langues = function (req, res) {
    var new_langue_update = new langue(req.body);

    // Use a method defined in the Model
    langue.updateAlllangues(new_langue_update, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
            console.log("controller json");
        }
    })

};

exports.Delete_all_langues = function (req, res) {
    var new_langue_Delete = new langue(req.body);

    // Use a method defined in the Model
    langue.deleteAlllangues(new_langue_Delete, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
            console.log("controller json");
        }
    })

};


