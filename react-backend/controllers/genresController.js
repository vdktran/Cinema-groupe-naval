
// Controller Require Model
var Genre = require('../models/genresModel');

// Define and export a method to be used by the Route
exports.Display_all_genres = function (req, res) {

    // Use a method defined in the Model
    Genre.getAllgenres(function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })

};

exports.Insert_all_genres = function (req, res) {
    var new_genre_insert = new Genre(req.body);

    // Use a method defined in the Model
    Genre.insertAllgenre(new_genre_insert, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
            console.log("controller json");
        }
    })

};

exports.Update_all_genres = function (req, res) {
    var new_genre_update = new Genre(req.body);

    // Use a method defined in the Model
    Genre.updateAllgenre(new_genre_update, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
            console.log("controller json");
        }
    })

};

exports.Delete_all_genres = function (req, res) {
    var new_genre_delete = new Genre(req.body);

    // Use a method defined in the Model
    Genre.deleteAllgenre(new_genre_delete, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
            console.log("controller json");
        }
    })

};
