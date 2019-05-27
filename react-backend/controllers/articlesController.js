
// Controller Require Model
var article = require('../models/articlesModel');

// Define and export a method to be used by the Route
exports.Display_all_articles = function (req, res) {

    // Use a method defined in the Model
    article.getAllarticles(function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })
};

exports.Insert_all_articles = function (req, res) {
    var new_article_insert = new article(req.body);

    // Use a method defined in the Model
    article.insertAllarticles(new_article_insert, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
            console.log("controller json");
        }
    })

};

exports.Update_all_articles = function (req, res) {
    var new_article_update = new article(req.body);

    // Use a method defined in the Model
    article.updateAllarticles(new_article_update, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
            console.log("controller json");
        }
    })

};

exports.Delete_all_articles = function (req, res) {
    var new_article_Delete = new article(req.body);

    // Use a method defined in the Model
    article.deleteAllarticles(new_article_Delete, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
            console.log("controller json");
        }
    })

};


