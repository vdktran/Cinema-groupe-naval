
// Controller Require Model
var reservation = require('../models/reservationsModel');

// Define and export a method to be used by the Route
exports.Display_all_reservations = function (req, res) {

    // Use a method defined in the Model
    reservation.getAllreservations(function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })
};

exports.Insert_all_reservations = function (req, res) {
    var new_reservation_insert = new reservation(req.body);

    // Use a method defined in the Model
    reservation.insertAllreservations(new_reservation_insert, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
            console.log("controller json");
        }
    })

};

exports.Update_all_reservations = function (req, res) {
    var new_reservation_update = new reservation(req.body);

    // Use a method defined in the Model
    reservation.updateAllreservations(new_reservation_update, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
            console.log("controller json");
        }
    })

};

exports.Delete_all_reservations = function (req, res) {
    var new_reservation_Delete = new reservation(req.body);

    // Use a method defined in the Model
    reservation.deleteAllreservations(new_reservation_Delete, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
            console.log("controller json");
        }
    })

};


