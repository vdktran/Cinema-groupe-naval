
// Controller Require Model
var Films = require('../models/filmsModel');

// Define and export a method to be used by the Route
exports.display_all_films = function (req, res) {

    // Use a method defined in the Model
    Films.getAllFilms(function(err, data){
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })

  };
