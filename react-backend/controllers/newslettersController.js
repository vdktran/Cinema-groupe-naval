
// Controller Require Model
var newsletter = require('../models/newslettersModel');

// Define and export a method to be used by the Route
exports.Display_all_newsletters = function (req, res) {

    // Use a method defined in the Model
    newsletter.getAllnewsletters(function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })
};

exports.Insert_all_newsletters = function (req, res) {
    var new_newsletter_insert = new newsletter(req.body);

    // Use a method defined in the Model
    newsletter.insertAllnewsletters(new_newsletter_insert, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
            console.log("controller json");
        }
    })

};

exports.Update_all_newsletters = function (req, res) {
    var new_newsletter_update = new newsletter(req.body);

    // Use a method defined in the Model
    newsletter.updateAllnewsletters(new_newsletter_update, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
            console.log("controller json");
        }
    })

};

exports.Delete_all_newsletters = function (req, res) {
    var new_newsletter_Delete = new newsletter(req.body);

    // Use a method defined in the Model
    newsletter.deleteAllnewsletters(new_newsletter_Delete, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
            console.log("controller json");
        }
    })

};


