// Controller Require Model
var Reservation = require('../models/reservationModel');

// Define and export a method to be used by the Route
exports.display_All_Reservation = function (req, res) {

    // Use a method defined in the Model
    Reservation.getAllReservation(function(err, data){
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })

};