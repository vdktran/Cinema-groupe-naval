
// Controller Require Model
var pri = require('../models/prixModel');

// Define and export a method to be used by the Route
exports.Display_all_prix = function (req, res) {

    // Use a method defined in the Model
    pri.getAllpri(function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })
};

exports.Insert_all_prix = function (req, res) {
    var new_pri_insert = new pri(req.body);

    // Use a method defined in the Model
    pri.insertAllprix(new_pri_insert, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
            console.log("controller json");
        }
    })

};

exports.Update_all_prix = function (req, res) {
    var new_pri_update = new pri(req.body);

    // Use a method defined in the Model
    pri.updateAllprix(new_pri_update, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
            console.log("controller json");
        }
    })

};

exports.Delete_all_prix = function (req, res) {
    var new_pri_Delete = new pri(req.body);

    // Use a method defined in the Model
    pri.deleteAllprix(new_pri_Delete, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
            console.log("controller json");
        }
    })

};


