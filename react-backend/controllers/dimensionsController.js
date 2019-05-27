
// Controller Require Model
var dimension = require('../models/dimensionsModel');

// Define and export a method to be used by the Route
exports.Display_all_dimensions = function (req, res) {

    // Use a method defined in the Model
    dimension.getAlldimensions(function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })
};

exports.Insert_all_dimensions = function (req, res) {
    var new_dimension_insert = new dimension(req.body);

    // Use a method defined in the Model
    dimension.insertAlldimensions(new_dimension_insert, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
            console.log("controller json");
        }
    })

};

exports.Update_all_dimensions = function (req, res) {
    var new_dimension_update = new dimension(req.body);

    // Use a method defined in the Model
    dimension.updateAlldimensions(new_dimension_update, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
            console.log("controller json");
        }
    })

};

exports.Delete_all_dimensions = function (req, res) {
    var new_dimension_Delete = new dimension(req.body);

    // Use a method defined in the Model
    dimension.deleteAlldimensions(new_dimension_Delete, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
            console.log("controller json");
        }
    })

};


