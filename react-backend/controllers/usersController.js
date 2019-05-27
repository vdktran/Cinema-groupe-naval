
// Controller Require Model
var user = require('../models/usersModel');

// Define and export a method to be used by the Route
exports.Display_all_users = function (req, res) {

    // Use a method defined in the Model
    user.getAllusers(function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })
};

exports.Insert_all_users = function (req, res) {
    var new_user_insert = new user(req.body);

    // Use a method defined in the Model
    user.insertAllusers(new_user_insert, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
            console.log("controller json");
        }
    })

};

exports.Update_all_users = function (req, res) {
    var new_user_update = new user(req.body);

    // Use a method defined in the Model
    user.updateAllusers(new_user_update, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
            console.log("controller json");
        }
    })

};

exports.Delete_all_users = function (req, res) {
    var new_user_Delete = new user(req.body);

    // Use a method defined in the Model
    user.deleteAllusers(new_user_Delete, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
            console.log("controller json");
        }
    })

};


