
// Controller Require Model
var Genre = require('../models/genreModel');

// Define and export a method to be used by the Route
exports.display_All_Genre = function (req, res) {

    // Use a method defined in the Model
    Genre.getAllGenre(function(err, data){
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })

  };
