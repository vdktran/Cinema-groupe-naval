
// Controller Require Model
var Session = require('../models/SessionsModel');

// Define and export a method to be used by the Route
exports.Display_all_sessions = function (req, res) {

    // Use a method defined in the Model
    Session.getAllSessions(function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })
};

exports.Insert_all_sessions = function (req, res) {
    var new_session_insert = new Session(req.body);

    // Use a method defined in the Model
    Session.insertAllSessions(new_session_insert, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
            console.log("controller json");
        }
    })

};

exports.Update_all_sessions = function (req, res) {
    var new_session_update = new Session(req.body);

    // Use a method defined in the Model
    Session.updateAllSessions(new_session_update, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
            console.log("controller json");
        }
    })

};

exports.Delete_all_sessions = function (req, res) {
    var new_session_Delete = new Session(req.body);

    // Use a method defined in the Model
    Session.deleteAllSessions(new_session_Delete, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
            console.log("controller json");
        }
    })

};

exports.display_seances_of_the_day = function (req, res) {
    var request = [req.params.dayweek, req.params.film_id];

    // Use a method defined in the Model
    Session.getSeancesOfTheDay(request, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })

};


