
// Controller Require Model
var statu = require('../models/statusModel');

// Define and export a method to be used by the Route
exports.Display_all_status = function (req, res) {

    // Use a method defined in the Model
    statu.getAllstatus(function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })
};

exports.Insert_all_status = function (req, res) {
    var new_statu_insert = new statu(req.body);

    // Use a method defined in the Model
    statu.insertAllstatus(new_statu_insert, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
            console.log("controller json");
        }
    })

};

exports.Update_all_status = function (req, res) {
    var new_statu_update = new statu(req.body);

    // Use a method defined in the Model
    statu.updateAllstatus(new_statu_update, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
            console.log("controller json");
        }
    })

};

exports.Delete_all_status = function (req, res) {
    var new_statu_Delete = new statu(req.body);

    // Use a method defined in the Model
    statu.deleteAllstatus(new_statu_Delete, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
            console.log("controller json");
        }
    })

};


